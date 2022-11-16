import * as accountService from "../services/accountService.js"
import * as userService from "../services/userService.js"
import * as transactionRepository from "../repositories/transactionRepository.js"

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
  console.log(destinationUser.accountId);

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
  return await transactionRepository.getTransactions(data)
}