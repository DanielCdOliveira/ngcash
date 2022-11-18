import { Prisma, PrismaClient } from "@prisma/client"
import { prisma } from "../database.js"
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
export async function getTransactions(data: getTransactionsInfo) {
  const query = `
  SELECT * FROM transactions
  ${data.cash ? `WHERE "${data.cash === "in" ? "creditedAccountId" : "debitedAccountId"}"=${data.accountId}` :
      `WHERE "creditedAccountId"=${data.accountId} OR "debitedAccountId"=${data.accountId}`}
  ${data.date ? `AND "createdAt" BETWEEN '${data.date} 00:00:00' AND '${data.date} 23:59:59'` : ""}
  ORDER BY "createdAt" DESC`
  return await prisma.$queryRawUnsafe(query)
}