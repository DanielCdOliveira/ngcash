import * as accountRepository from "../repositories/accountRepository.js"

export async function createAccount() {
  const { id: accountId } = await accountRepository.createAccount()
  return accountId
}
export async function getBalance(accountId: number) {
  const { balance } = await accountRepository.getAccount(accountId)
  if (balance === null) {
    throw {
      type: 'not_found'
    }
  }
  return balance
}
export function intToString(value: number) {
  return (value / 100).toFixed(2).replace(".", ",")
}
// export function stringToInt(value: string) {
//   return parseFloat(value.replace(",", ".")) * 100
// }