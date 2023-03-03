import { UrlRepository } from "../repositories/UrlRepository";

interface urlProps {
  url: string;
}

export class UrlService {
  async createUrl({ url }: urlProps) {
    const urlRepository = new UrlRepository
    if (!url) {
      throw new Error("url is required");
    }

    const objUrl = {
      url,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objUrl),
    };

    const shortUrl = await fetch(
      "https://api.encurtador.dev/encurtamentos",
      options
    )
      .then((response) => response.json())
      .then((data) => {
        return data.urlEncurtada;
      });

    const urlResponse = await urlRepository.createShortUrl({ url, shortUrl })

    return urlResponse;
  }

  async findShortUrlService(short_url: string) {
    const urlRepository = new UrlRepository
    if (!short_url) {
      throw new Error("error uma short url tem que ser passada");
    }

    const shortUrlExist = await urlRepository.shortUrlExists(short_url)

    const url = shortUrlExist?.url;

    return url;
  }
}
