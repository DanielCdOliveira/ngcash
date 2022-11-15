import { prisma } from "../database.js"

import { UserData } from "../interfaces/interfaces.js"

export async function createAccount() {
  return await prisma.account.create({ data: { balance: 10000 } })
}
