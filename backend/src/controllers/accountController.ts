import { Request, Response } from "express";

import * as accountService from "../services/accountService.js"

export async function getBalance(req: Request, res: Response) {
  const { accountId } = res.locals.userInfo
  const balance = await accountService.getBalance(accountId)
  res.status(200).send({ balance })
}
