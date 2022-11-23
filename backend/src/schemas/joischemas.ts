import joi, { date } from "joi"

export const userSchema = joi.object({
  username: joi.string().min(3).required(),
  password: joi.string().pattern(new RegExp('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,20}$')),
})
export const postTransactionSchema = joi.object({
  destinationUserName: joi.string().min(3).required(),
  amount: joi.number().required()
})
export const getTransactionsSchema = joi.object({
  cash: joi.string().valid("in", "out", ""),
  startDate: joi.string().pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/),
  endDate: joi.string().pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/),
})