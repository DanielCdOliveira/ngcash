import * as accountRepository from "../repositories/accountRepository.js"

export async function createAccount() {
  const { id: accountId } = await accountRepository.createAccount()
  return accountId
}