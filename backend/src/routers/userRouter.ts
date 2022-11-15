import { Router } from "express";
import { signup, signin } from "../controllers/userController.js"
import schemaVerifier from "../middlewares/schemaVerifier.js";
import { signupSchema } from "../schemas/joischemas.js";
const usersRouter = Router()
usersRouter.post("/signup", schemaVerifier(signupSchema), signup)
export default usersRouter