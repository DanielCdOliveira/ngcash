import joi from "joi"

export const userSchema = joi.object({
  username: joi.string().min(3).required(),
  password: joi.string().pattern(new RegExp('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,20}$')),
})
