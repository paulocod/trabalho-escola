import { Router, type Request, type Response } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { authController } from '../services/Auth'
import { userController } from '../services/User'

const userRouter = Router()

userRouter.post('/user', ensureAuthenticated, async (req: Request, res: Response) => {
  return await userController.create(req, res)
})
userRouter.get('/hello', async (req: Request, res: Response) => {
  return res.send('hello world')
})
userRouter.post('/auth', async (req: Request, res: Response) => {
  return await authController.create(req, res)
})
userRouter.get('/users', ensureAuthenticated, async (req: Request, res: Response) => {
  return await userController.allUsers(req, res)
})
userRouter.get('/user/:id', ensureAuthenticated, async (req: Request, res: Response) => {
  return await userController.detailUser(req, res)
})

export { userRouter }
