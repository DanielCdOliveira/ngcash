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
  SELECT t.value,t."createdAt",u.username as "from", utwo.username as "to" FROM transactions as t
  JOIN accounts as a
  ON t."debitedAccountId"=a."id"
  JOIN users as u
  ON a."id"=u."accountId"
  JOIN accounts as atwo
  ON t."creditedAccountId"=atwo."id"
  JOIN users as utwo
  ON atwo."id"=utwo."accountId" 
  ${data.date ? `WHERE ("createdAt" BETWEEN '${data.date} 00:00:00' AND '${data.date} 23:59:59')` : ""}
  ${data.cash ? `${data.date ? "AND" : "WHERE"} ("${data.cash === "in" ? "creditedAccountId" : "debitedAccountId"}"=${data.accountId})` :
      `${data.date ? "AND" : "WHERE"} ("creditedAccountId"=${data.accountId} OR "debitedAccountId"=${data.accountId})`}
  ORDER BY "createdAt" DESC`
  console.log(query);

  return await prisma.$queryRawUnsafe(query)
}