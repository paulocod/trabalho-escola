import { PrismaClient } from "@prisma/client";
import { nanoid } from 'nanoid';
import { redisClient } from "../helpers/redis";

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

  async RealFindShortUrlService(id: string) {
    if (!id) {
      throw new Error("url não existe");
    }

    console.time()
    const urlCache = await redisClient.get(`id-${id}`)
    console.timeEnd()

    if (urlCache) {
      console.log('pegou do redis')
      return urlCache
    }

    console.time()
    const shortUrl = await prisma.url.findFirst({
      where: { id },
    });
    console.log('pegou do banco')
    console.timeEnd()

    await redisClient.set(`id-${id}`, JSON.stringify(shortUrl))
    console.log('salvou no redis')

    return shortUrl;
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
