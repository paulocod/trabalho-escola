import { app } from './app'
import { RabbitMqServer } from './helpers/rabbitMQ'
import { redisClient } from './helpers/redis'

const port = process.env.PORT ?? 3000
const ampqCloud = process.env.CLOUDAMQP_URL ?? ''

const start = async () => {
  try {
    const rabbit = new RabbitMqServer(ampqCloud)
    await rabbit.start()
    await redisClient.connect()
  } catch (error) {
    throw new Error('não foi possivel conectar ao servidor Redis')
  }
  app.listen(port, () => {
    console.log(`🚀 servidor O N L I N E ${port}`)
  })
}
void start()
