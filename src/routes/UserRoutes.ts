import { Router } from 'express'
import { UserController } from '../controllers/UserController'

const userRouter = Router()

userRouter.post('/user', new UserController().create)
userRouter.get('/', new UserController().allUsers)

export { userRouter }
