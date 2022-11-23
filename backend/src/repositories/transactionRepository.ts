import { Prisma, PrismaClient } from "@prisma/client"
import { prisma } from "../database.js"
import { TransactionInfo } from "../interfaces/interfaces.js"
type getTransactionsInfo = {
  accountId?: number
  date?: string
  cash?: "in" | "out"
}
export async function makeTransaction({ from, amount, to }) {
  try {

    const cashOut = prisma.account.update({
      data: {
        balance: {
          decrement: amount,
        },
      },
      where: {
        id: from,
      },
    })
    const cashIn = prisma.account.update({
      data: {
        balance: {
          increment: amount,
        },
      },
      where: {
        id: to,
      },
    })
    const createTransaction = prisma.transaction.create({
      data:
      {
        debitedAccountId: from,
        creditedAccountId: to,
        value: amount
      }
    })
    await prisma.$transaction([cashOut, cashIn, createTransaction])
  } catch (error) {
    throw {
      type: "not_found",
      message: "deu bosta"
    }
  }
}
export async function getTransactions({ accountId, cash, startDate, endDate }: TransactionInfo) {
  const query = `
  SELECT t.id,t.value,t."createdAt",u.username as "from", utwo.username as "to" FROM transactions as t
  JOIN accounts as a
  ON t."debitedAccountId"=a."id"
  JOIN users as u
  ON a."id"=u."accountId"
  JOIN accounts as atwo
  ON t."creditedAccountId"=atwo."id"
  JOIN users as utwo
  ON atwo."id"=utwo."accountId" 
  ${startDate ? `WHERE ("createdAt" BETWEEN '${startDate} 00:00:00' AND '${endDate} 23:59:59')` : ""}
  ${cash ? `${startDate ? "AND" : "WHERE"} ("${cash === "in" ? "creditedAccountId" : "debitedAccountId"}"=${accountId})` :
      `${startDate ? "AND" : "WHERE"} ("creditedAccountId"=${accountId} OR "debitedAccountId"=${accountId})`}
  ORDER BY "createdAt" DESC`
  return await prisma.$queryRawUnsafe(query)
}