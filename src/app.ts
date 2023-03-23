import * as Sentry from '@sentry/node'
import * as Tracing from '@sentry/tracing'
import compression from 'compression'
import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import 'express-async-errors'
import helmet from 'helmet'
import { pinoHttp } from 'pino-http'
import { logger } from './helpers/logger'
import { errorRouter } from './routes/Error'
import { urlRouter } from './routes/UrlRoutes'
import { userRouter } from './routes/UserRoutes'

const options: cors.CorsOptions = {
  methods: 'GET,POST',
  origin: '*'
}
const logHttp = pinoHttp({ logger })

const app = express()
Sentry.init({
  dsn: process.env.SENTRY_DSN_URL,
  integrations: [
    new Sentry.Integrations.Http({ tracing: true }),
    new Tracing.Integrations.Express({ app })
  ],
  tracesSampleRate: 1.0
})
app.use(helmet())
app.use(cors(options))
app.use(express.json())
app.use(compression())
app.use(logHttp)
app.use(Sentry.Handlers.requestHandler())
app.use(Sentry.Handlers.tracingHandler())
app.use(userRouter)
app.use(urlRouter)
app.use(errorRouter)
app.use(Sentry.Handlers.errorHandler())
app.use(function onError (_err: Error, req: express.Request, res: express.Response, next: express.NextFunction) {
  console.log(_err)
  return res.status(500).json({ msg: _err.message })
})

export { app }
