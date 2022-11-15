import joi from "joi"

export const signupSchema = joi.object({
  username: joi.string().min(3).required(),
  password: joi.string().pattern(new RegExp('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,20}$')),
})
export const loginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(10).required(),
})