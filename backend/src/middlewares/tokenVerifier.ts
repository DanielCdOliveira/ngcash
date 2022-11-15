import { NextFunction, Request, Response } from "express";

import * as userServices from "../services/userService.js"

export default async function verifyToken(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  const data = await userServices.checkToken(authorization)
  res.locals.userInfo = data
  next()
}