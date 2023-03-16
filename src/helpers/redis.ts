import { createClient } from 'redis'
const url = process.env.REDIS_URL ?? 'redis://localhost:6379'

const redisClient = createClient({
  url
})

export { redisClient }
