import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import helmet from 'helmet'
import { healthRouter } from './routes/Health'
import { urlRouter } from './routes/UrlRoutes'
import { userRouter } from './routes/UserRoutes'

const options: cors.CorsOptions = {
  methods: 'GET,POST',
  origin: '*'
}

const app = express()
app.use(helmet())
app.use(cors(options))
app.use(express.json())
app.use(userRouter)
app.use(urlRouter)
app.use(healthRouter)

export { app }
