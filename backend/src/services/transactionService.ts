import * as accountService from "../services/accountService.js"
import * as userService from "../services/userService.js"
import * as transactionRepository from "../repositories/transactionRepository.js"
import { Transaction } from "@prisma/client";
import dayjs from "dayjs"


const daysOfWeek = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
type getTransactionsInfo = {
  accountId?: number
  date?: string
  cash?: "in" | "out"
};

export async function makeTransaction({ accountId: from, destinationUserName, amount }) {
  await checkValue(from, amount)
  const destinationUser = await destinationUserExists(destinationUserName)
  if (destinationUser.accountId === from) {
    throw {
      type: "conflict",
      message: "same account IDs"
    }
  }
  await transactionRepository.makeTransaction({ from, to: destinationUser.accountId, amount })
}
async function checkValue(from: number, amount: number) {
  const balance = await accountService.getBalance(from)
  if (amount > balance) {
    throw {
      type: "unauthorized",
      message: "insufficient funds"
    }
  }
}
async function destinationUserExists(destinationUserName: string) {
  const destinationUser = userService.getUserByName(destinationUserName)
  if (!destinationUser) {
    throw {
      type: "not_found",
      message: "target user does not exist"
    }
  }
  return destinationUser
}
export async function getTransactions(data: getTransactionsInfo) {
  const transactions = await transactionRepository.getTransactions(data)
  const transactionsFormated = formatTransactions(transactions)
  return transactionsFormated
}
export function formatTransactions(transactions: any) {
  const transactionsFormated = []
  let date = dayjs(transactions[0].createdAt).format('DD/MM/YYYY')
  let dayOfWeek = daysOfWeek[new Date(transactions[0].createdAt).getDay()]
  let transactionsArray = []
  let transactionsOfDay = { date, dayOfWeek, transactionsArray }
  console.log(transactionsOfDay);

  transactions.map((transaction: any) => {
    const newDate = dayjs(transaction.createdAt).format('DD/MM/YYYY')
    const dateSplit = transaction.createdAt.toString().split(" ");
    transaction.hour = dateSplit[4].replaceAll(":", "/")
    if (newDate != date) {
      transactionsFormated.push(transactionsOfDay)
      date = newDate
      dayOfWeek = daysOfWeek[new Date(transaction.createdAt).getDay()]
      transactionsOfDay = { date, dayOfWeek, transactionsArray: [] }
      transactionsOfDay.transactionsArray.push(transaction)
    } else {
      transactionsOfDay.transactionsArray.push(transaction)
    }
  })
  return transactionsFormated
}