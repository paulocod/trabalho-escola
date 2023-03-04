import { UrlRepository } from '../../repositories/UrlRepository'
import { UrlService } from './UrlService'
import { UrlController } from '../../controllers/Url/UrlController'

const urlRepository = new UrlRepository()

const urlService = new UrlService(urlRepository)

const urlController = new UrlController(urlService)

export { urlService, urlController }
