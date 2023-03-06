import { Router, type Request, type Response } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { userController } from '../services/User'
import { authController } from '../services/Auth'

const userRouter = Router()

userRouter.post('/user', ensureAuthenticated, async (req: Request, res: Response) => {
  return await userController.create(req, res)
})
userRouter.post('/auth', async (req: Request, res: Response) => {
  return await authController.create(req, res)
})
userRouter.get('/', ensureAuthenticated, async (req: Request, res: Response) => {
  return await userController.allUsers(req, res)
})
userRouter.get('/user/:id', ensureAuthenticated, async (req: Request, res: Response) => {
  return await userController.detailUser(req, res)
})

export { userRouter }
