import { Router } from "express";
import { makeTransaction } from "../controllers/transactionController.js";
import verifyToken from "../middlewares/tokenVerifier.js";

const transactionRouter = Router()
transactionRouter.post("/transaction", verifyToken, makeTransaction)

export default transactionRouter