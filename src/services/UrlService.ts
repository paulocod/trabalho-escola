import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface urlProps {
  url: string;
}

export class UrlService {
  async createUrl({ url }: urlProps) {
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

    const urlResponse = await prisma.url.create({
      data: {
        url: url,
        short_url: shortUrl,
      },
    });

    return urlResponse;
  }

  async findShortUrlService(short_url: string) {
    if (!short_url) {
      throw new Error("error em short_url");
    }

    const shortUrlExist = await prisma.url.findFirst({
      where: { short_url: short_url },
    });

    const url = shortUrlExist?.url;

    return url;
  }
}
