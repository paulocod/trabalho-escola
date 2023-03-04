import { Router } from 'express'
import { urlController } from '../services/Url'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const urlRouter = Router()

urlRouter.post('/user/url', ensureAuthenticated, async (req, res) => {
  return await urlController.create(req, res)
})
urlRouter.post('/user/shorturl', ensureAuthenticated, async (req, res) => {
  return await urlController.findUrlShort(req, res)
})

export { urlRouter }
