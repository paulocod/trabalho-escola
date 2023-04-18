import { PrismaClient } from '../../node_modules/.prisma/client/index'

const prisma = new PrismaClient({
  errorFormat: 'pretty',
  log: ['query', 'error']
})

export { prisma }
