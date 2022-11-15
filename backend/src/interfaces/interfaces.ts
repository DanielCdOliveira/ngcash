import { User, Account, Transaction } from "@prisma/client"

export type UserData = Omit<User, "id">