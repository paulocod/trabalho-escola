import { Request, Response } from "express";
import { UrlService } from "../services/UrlService";

export class UrlController {
  async create(req: Request, res: Response) {
    const { url } = req.body;
    const service = new UrlService();
    try {
      const urlResponse = await service.createUrl({ url });
      return res.status(200).json({ url: urlResponse });
    } catch (error) {
      console.log(error)
      return res.status(400).send({ error: 'Ocorreu um erro com a api de url' })
    }
  }
  async findUrlShort(req: Request, res: Response) {
    const { short_url } = req.body;
    const service = new UrlService();
    try {
      const urlResponse = await service.findShortUrlService(short_url);
      return res.status(200).json({ full_url: urlResponse });
    } catch (error) {
      console.log(error)
      return res.status(400).send({ error: 'Ocorreu um erro com a api de url' })
    }
  }
}
