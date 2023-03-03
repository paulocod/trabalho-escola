import { prisma } from '../prisma/index'

interface urlProps {
  url: string
  shortUrl: string
}

export class UrlRepository {
  async createShortUrl ({ url, shortUrl }: urlProps) {
    const urlResponse = await prisma.url.create({
      data: {
        url,
        short_url: shortUrl
      }
    })

    return urlResponse
  }

  async shortUrlExists (shortUrl: string) {
    const shortUrlExist = await prisma.url.findFirst({
      where: { short_url: shortUrl }
    })
    return shortUrlExist
  }
}
