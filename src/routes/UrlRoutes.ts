import { Router } from 'express'
import { UrlController } from '../controllers/UrlController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const urlRouter = Router()

urlRouter.post('/user/url', ensureAuthenticated, new UrlController().create)
urlRouter.post('/user/shorturl', ensureAuthenticated, new UrlController().findUrlShort)

export { urlRouter }
