import { Router } from "express";
import { getTransactions, makeTransaction } from "../controllers/transactionController.js";
import verifyToken from "../middlewares/tokenVerifier.js";

const transactionRouter = Router()
transactionRouter.post("/transaction", verifyToken, makeTransaction)
transactionRouter.get("/transactions", verifyToken, getTransactions)
export default transactionRouter