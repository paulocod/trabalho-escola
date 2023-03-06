import { Router, type Request, type Response } from 'express'
import { urlController } from '../services/Url'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const urlRouter = Router()

urlRouter.post('/user/url', ensureAuthenticated, async (req: Request, res: Response) => {
  return await urlController.create(req, res)
})
urlRouter.post('/user/shorturl', ensureAuthenticated, async (req: Request, res: Response) => {
  return await urlController.findUrlShort(req, res)
})

export { urlRouter }
