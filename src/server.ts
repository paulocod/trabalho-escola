import { app } from './app'
import { redisClient } from './helpers/redis'

const port = process.env.PORT ?? 3000

const start = async () => {
  try {
    await redisClient.connect()
  } catch (error) {
    throw new Error('não foi possivel conectar ao servidor Redis')
  }
  app.listen(port, () => {
    console.log(`🚀 servidor O N L I N E ${port}`)
  })
}
void start()
