import { type UrlRepository } from '../../repositories/UrlRepository'

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

    const objUrl = {
      url
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(objUrl)
    }

    const shortUrl = await fetch(
      'https://api.encurtador.dev/encurtamentos',
      options
    )
      .then(async (response: { json: () => any }) => response.json())
      .then((data: { urlEncurtada: any }) => {
        return data.urlEncurtada
      })

    const urlResponse = await this.urlRepository.createShortUrl({ url, shortUrl })
    return urlResponse
  }

  async findShortUrlService (shortUrl: string) {
    if (!shortUrl) {
      throw new Error('error uma short url tem que ser passada')
    }

    const shortUrlExist = await this.urlRepository.shortUrlExists(shortUrl)

    const url = shortUrlExist?.url

    return url
  }
}
