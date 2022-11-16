import { Request, Response } from "express";

import * as userService from "../services/userService.js"

export async function signup(req: Request, res: Response) {
  const newUser = req.body
  await userService.createUser(newUser)
  res.sendStatus(201)
}
export async function signin(req: Request, res: Response) {
  const user = req.body
  const token = await userService.login(user)
  res.status(200).send({ token })
}
export async function returnUser(req: Request, res: Response) {
  const { username } = res.locals.userInfo
  res.status(200).send({ username })
}