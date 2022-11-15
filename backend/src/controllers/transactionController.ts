import { Request, Response } from "express";

import * as transactionService from "../services/transactionService.js"

export async function makeTransaction(req: Request, res: Response) {
  const { accountId } = res.locals.userInfo
  const transactionInfo = req.body;
  await transactionService.makeTransaction({ ...transactionInfo, accountId })
  res.sendStatus(200)
}
