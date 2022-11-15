import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

import { UserData } from "../interfaces/interfaces.js"
import * as userRepository from "../repositories/userRepository.js"
import * as accountServices from "../services/accountService.js"
const SALT = parseInt(process.env.SALT)
const JWT = process.env.JWT

export async function createUser(newUser: UserData) {
  await checkUserExists(newUser.username)
  newUser.accountId = await accountServices.createAccount()
  newUser.password = bcrypt.hashSync(newUser.password, SALT)
  await userRepository.insertNewUser(newUser)
}
async function checkUserExists(username: string) {
  const userExists = await userRepository.getUserByName(username)
  if (userExists) {
    throw {
      type: "conflict",
      message: `${username} already registered`
    }
  }
}
export async function login(user: UserData) {
  const userDb = await userRepository.getUserByName(user.username)
  if (userDb && bcrypt.compareSync(user.password, userDb.password)) {
    const token = jwt.sign({ id: userDb.id }, JWT, { expiresIn: "1d" });
    return token
  }
  throw {
    type: "unauthorized",
    message: `Incompatible username and password`
  }
}
export async function checkToken(authorization: string) {
  try {
    const token = authorization?.replace("Bearer ", "").trim();
    if (!token) {
      throw {}
    }
    const data = jwt.verify(token, JWT) as any;
    const { id, accountId } = await userRepository.getUserById(data.id)
    if (!id) {
      throw {}
    }
    return { id, accountId }
  } catch (error) {
    throw {
      type: "unauthorized",
      message: "invalid token"
    }
  }
}