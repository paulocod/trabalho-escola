
interface urlProps {
  url: string
  shortUrl: string
}

export class UrlRepositoryInMemory {
  private urls: urlProps[] = []
  async createShortUrl ({ url, shortUrl }: urlProps) {
    const urlArr: urlProps = {
      url,
      shortUrl
    }
    this.urls.push(urlArr)
    return urlArr
  }

  async shortUrlExists (shortUrl: string) {
    const url = this.urls.some((url) => url.shortUrl === shortUrl)
    return url
  }
}
