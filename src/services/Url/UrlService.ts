import { nanoid } from 'nanoid'
import { type UrlRepository } from '../../repositories/UrlRepository'
import { prisma } from '../../prisma'
import { RabbitMqServer } from '../../helpers/rabbitMQ'

interface urlProps {
  url: string
}
const ampqCloud = process.env.CLOUDAMQP_URL ?? ''

export class UrlService {
  constructor (
    private urlRepository: UrlRepository
  ) { }

  async createUrl ({ url }: urlProps) {
    if (!url) {
      throw new Error('url is required')
    }

    const urlExists = await prisma.url.findFirst({
      where: {
        url
      }
    })

    if (urlExists) {
      throw new Error('This Url Existed')
    }

    const urlCode = nanoid()
    const shortUrlCode = `acesse/${urlCode}`
    console.log(shortUrlCode)
    const urlResponse = await this.urlRepository.createShortUrl({ url, shortUrlCode })
    const rabbit = new RabbitMqServer(ampqCloud)
    await rabbit.start()
    await rabbit.publishInQueue('queue', JSON.stringify(urlResponse.short_url))
    return urlResponse
  }

  async findShortUrlService (shortUrl: string) {
    if (!shortUrl) {
      throw new Error('Error a shorted url to be passed')
    }

    const shortUrlExist = await this.urlRepository.shortUrlExists(shortUrl)

    const url = shortUrlExist?.url

    return url
  }
}
