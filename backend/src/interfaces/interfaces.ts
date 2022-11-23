import { User, Account, Transaction } from "@prisma/client"

export type UserData = Omit<User, "id">
export type TransactionInfo = {
  accountId?: number,
  cash: "in" | "out" | "",
  startDate: string,
  endDate: string
}