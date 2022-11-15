import { prisma } from "../database.js"

export async function createAccount() {
  return await prisma.account.create({ data: { balance: 10000 } })
}
export async function getAccount(accountId: number) {
  return await prisma.account.findFirst({ where: { id: accountId } })
}
