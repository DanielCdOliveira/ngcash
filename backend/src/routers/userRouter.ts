import { Router } from "express";
import { signup, signin } from "../controllers/userController.js"
import schemaVerifier from "../middlewares/schemaVerifier.js";
import { userSchema } from "../schemas/joischemas.js";
const usersRouter = Router()
usersRouter.post("/signup", schemaVerifier(userSchema), signup)
usersRouter.post("/signin", schemaVerifier(userSchema), signin)
export default usersRouter