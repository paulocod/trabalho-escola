import { type Request, type Response } from 'express'
import { type UrlService } from '../../services/Url/UrlService'

export class UrlController {
  constructor (
    private urlService: UrlService
  ) { }

  async create (req: Request, res: Response): Promise<Response> {
    const { url } = req.body

    try {
      const urlResponse = await this.urlService.createUrl({ url })
      return res.status(200).json({ url: urlResponse })
    } catch (error: any) {
      return res.status(400).send({ error: 'Ocorreu um erro com a api de url' })
    }
  }

  async findUrlShort (req: Request, res: Response) {
    const { shortUrl } = req.body

    try {
      const urlResponse = await this.urlService.findShortUrlService(shortUrl)
      return res.status(200).json({ full_url: urlResponse })
    } catch (error: any) {
      return res.status(400).send({ error: 'Ocorreu um erro com a api de url' })
    }
  }
}
