import { Request, Response } from "express";
import { getTransactionsSchema } from "../schemas/joischemas.js";

import * as transactionService from "../services/transactionService.js"
import { TransactionInfo } from "../interfaces/interfaces.js";
export async function makeTransaction(req: Request, res: Response) {
  const { accountId } = res.locals.userInfo
  const transactionInfo = req.body;
  await transactionService.makeTransaction({ ...transactionInfo, accountId })
  res.sendStatus(200)
}
export async function getTransactions(req: Request, res: Response) {
  const { accountId } = res.locals.userInfo
  const { cash, startDate, endDate } = req.query as unknown as TransactionInfo
  if (startDate !== "" || endDate !== "") {
    const { error } = getTransactionsSchema.validate({ startDate, endDate }, { abortEarly: false })
    if (error) {
      return res
        .status(422)
        .send(error.details.map((detail) => detail.message))
    }
  }
  const transactions = await transactionService.getTransactions({ cash, startDate, endDate, accountId })
  res.status(200).send(transactions)
}
