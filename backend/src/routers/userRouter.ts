import { Router } from "express";
import { signup, signin, returnUser } from "../controllers/userController.js"
import schemaVerifier from "../middlewares/schemaVerifier.js";
import verifyToken from "../middlewares/tokenVerifier.js";
import { userSchema } from "../schemas/joischemas.js";
const usersRouter = Router()
usersRouter.post("/signup", schemaVerifier(userSchema), signup)
usersRouter.post("/signin", schemaVerifier(userSchema), signin)
usersRouter.post("/validatetoken", verifyToken, returnUser)
export default usersRouter