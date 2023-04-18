import { nanoid } from 'nanoid'
import { type UrlRepository } from '../../repositories/UrlRepository'
import { prisma } from '../../prisma'

interface urlProps {
  url: string
}

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
