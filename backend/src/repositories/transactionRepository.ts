import { Prisma, PrismaClient } from "@prisma/client"
import { prisma } from "../database.js"

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