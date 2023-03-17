import { createClient } from 'redis'
const url = process.env.REDIS_URL_DEV ?? 'redis://localhost:6379'

const redisClient = createClient({
  url
})

export { redisClient }
