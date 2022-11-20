import { Request, Response } from "express";

import * as accountService from "../services/accountService.js"

export async function getBalance(req: Request, res: Response) {
  const { accountId } = res.locals.userInfo
  let balance: number | string = await accountService.getBalance(accountId)
  balance = accountService.intToString(balance)
  res.status(200).send({ balance })
}
