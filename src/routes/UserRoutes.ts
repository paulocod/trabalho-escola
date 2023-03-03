import { Router } from 'express'
import { UserController } from '../controllers/UserController'
import { AuthController } from '../controllers/authController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const userRouter = Router()

userRouter.post('/user', ensureAuthenticated, new UserController().create)
userRouter.post('/auth', new AuthController().create)
userRouter.get('/', ensureAuthenticated, new UserController().allUsers)

export { userRouter }
