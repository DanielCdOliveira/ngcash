import { Request, Response } from "express";
import { getTransactionsSchema } from "../schemas/joischemas.js";

import * as transactionService from "../services/transactionService.js"

export async function makeTransaction(req: Request, res: Response) {
  const { accountId } = res.locals.userInfo
  const transactionInfo = req.body;
  await transactionService.makeTransaction({ ...transactionInfo, accountId })
  res.sendStatus(200)
}
export async function getTransactions(req: Request, res: Response) {
  const { accountId } = res.locals.userInfo
  const transactionInfo = req.query
  if (transactionInfo.date != "") {
    const { error } = getTransactionsSchema.validate(transactionInfo, { abortEarly: false })
    console.log(error);
    if (error) {
      return res
        .status(422)
        .send(error.details.map((detail) => detail.message))
    }
  }
  const transactions = await transactionService.getTransactions({ ...transactionInfo, accountId })
  res.status(200).send(transactions)
}
