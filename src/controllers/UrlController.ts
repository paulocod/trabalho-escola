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
    const { shortUrl } = req.body;
    const service = new UrlService();
    const urlResponse = await service.findShortUrlService(shortUrl);
    return res.status(200).json({ full_url: urlResponse });
  }

  async getUrl(req: Request, res: Response) {
    const { id } = req.params;
    const service = new UrlService();
    const urlResponse = await service.RealFindShortUrlService(id);
    return res.status(200).json({ full_url: urlResponse });
  }
}
