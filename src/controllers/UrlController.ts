import { Request, Response } from "express";
import { UrlService } from "../services/UrlService";

export class UrlController {
  async create(req: Request, res: Response) {
    const { url } = req.body;

    const service = new UrlService();
    const urlResponse = await service.createUrl({ url });

    return res.status(200).json({ url: urlResponse });
  }
  async findUrlShort(req: Request, res: Response) {
    const { short_url } = req.body;
    const service = new UrlService();
    const urlResponse = await service.findShortUrlService(short_url);
    return res.status(200).json({ full_url: urlResponse });
  }
}
