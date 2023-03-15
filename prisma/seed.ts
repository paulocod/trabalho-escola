import { PrismaClient } from '@prisma/client'
import { nanoid } from 'nanoid'

const prisma = new PrismaClient()
async function main() {
  for (let index = 0; index < 500; index++) {
    const urlCode = nanoid()
    const shortUrlCode = `acesse/${urlCode}`
    await prisma.url.create({
      data: {
        id: nanoid(),
        short_url: shortUrlCode,
        url: 'http://wwww.youtube.com.br'
      },
    })
  }
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })