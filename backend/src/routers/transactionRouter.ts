import { Router } from "express";
import { getTransactions, makeTransaction } from "../controllers/transactionController.js";
import schemaVerifier from "../middlewares/schemaVerifier.js";
import verifyToken from "../middlewares/tokenVerifier.js";
import { getTransactionsSchema, postTransactionSchema } from "../schemas/joischemas.js";

const transactionRouter = Router()
transactionRouter.post("/transaction", schemaVerifier(postTransactionSchema), verifyToken, makeTransaction)
transactionRouter.get("/transactions", verifyToken, getTransactions)
export default transactionRouter