import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface urlProps {
  url: string;
  shortUrl: string
}

export class UrlRepository {
  async createShortUrl({ url, shortUrl }: urlProps) {
    const urlResponse = await prisma.url.create({
      data: {
        url,
        short_url: shortUrl,
      },
    });

    return urlResponse;
  }

  async shortUrlExists(short_url: string) {
    const shortUrlExist = await prisma.url.findFirst({
      where: { short_url },
    });
    return shortUrlExist
  }
}