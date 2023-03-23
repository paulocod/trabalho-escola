import { Router } from 'express'

const errorRouter = Router()

errorRouter.get('/debug-sentry', function mainHandler (req, res) {
  throw new Error('My first Sentry error!')
})

export { errorRouter }
