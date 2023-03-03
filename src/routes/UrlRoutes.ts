import { Router } from 'express'
import { UrlController } from '../controllers/UrlController'

const urlRouter = Router()

urlRouter.post('/user/url', new UrlController().create)
urlRouter.post('/user/shorturl', new UrlController().findUrlShort)

export { urlRouter }
