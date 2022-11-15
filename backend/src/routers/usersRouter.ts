import { Router } from "express";
const usersRouter = Router()
usersRouter.get("/hi", () => {
  console.log("aqui");
})
export default usersRouter