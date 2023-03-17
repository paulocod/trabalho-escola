import { Router } from 'express'

const healthRouter = Router()

healthRouter.get('/health', async (_req, res, _next) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now()
  }
  try {
    res.send(healthcheck)
  } catch (error) {
    healthcheck.message = error
    res.status(503).send()
  }
})

export { healthRouter }
