import { Router } from "express";
import verifyToken from "../middlewares/tokenVerifier.js";
import { getBalance } from "../controllers/accountController.js"

const accountRouter = Router()
accountRouter.get("/balance", verifyToken, getBalance)

export default accountRouter