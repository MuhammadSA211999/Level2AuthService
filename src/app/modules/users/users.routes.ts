import express from 'express'
import userController from './user.controller'

const userRouter = express.Router()
userRouter.post('/create-user', userController.userCreateCon).get('/all-user')
export default userRouter
