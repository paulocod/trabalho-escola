import 'dotenv/config'
import express from 'express'
import { userRouter } from './routes/UserRoutes'
import { urlRouter } from './routes/UrlRoutes'
import cors from 'cors'
import helmet from 'helmet'

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

export { app }
