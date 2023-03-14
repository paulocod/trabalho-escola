import { PrismaClient } from "@prisma/client";
import { nanoid } from 'nanoid';

const prisma = new PrismaClient();

interface urlProps {
  url: string;
}
export class UrlService {
  async createUrl({ url }: urlProps) {
    if (!url) {
      throw new Error("url is required");
    }

    const urlExists = await prisma.url.findFirst({
      where: {
        url
      }
    })

    if (urlExists) {
      throw new Error('Essa url já existe');
    }

    const urlCode = nanoid()
    const shortUrlCode = `acesse/${urlCode}`

    const urlResponse = await prisma.url.create({
      data: {
        url: url,
        short_url: shortUrlCode,
      },
    });
    return urlResponse;
  }

  async findShortUrlService(shortUrl: string) {
    if (!shortUrl) {
      throw new Error("error em short_url");
    }
    const shortUrlExist = await prisma.url.findFirst({
      where: { short_url: shortUrl },
    });

    const url = shortUrlExist?.url;

    return url;
  }
}
