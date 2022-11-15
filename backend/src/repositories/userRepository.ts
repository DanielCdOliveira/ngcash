import { prisma } from "../database.js"

import { UserData } from "../interfaces/interfaces.js"

export async function getUserByName(username: string) {
  return prisma.user.findFirst({ where: { username } })
}
export async function getUserById(id: number) {
  return prisma.user.findFirst({ where: { id } })
}
export async function insertNewUser(newUser: UserData) {
  return prisma.user.create({ data: { ...newUser } })
}