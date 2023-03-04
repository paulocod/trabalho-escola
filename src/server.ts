import { app } from './app'
import { redisClient } from './helpers/redis'

const port = process.env.PORT ?? 3000

const start = async () => {
  await redisClient.connect()
  app.listen(port, () => {
    console.log(`🚀 servidor O N L I N E ${port}`)
  })
}
void start()
