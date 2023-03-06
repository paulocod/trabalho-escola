// @ts-nocheck
import { test, expect, describe, beforeEach } from 'vitest'
import { UrlRepositoryInMemory } from '../../../repositories/in-memory/Url/UrlRepositoryInMemory'
import { UrlService } from '../../../services/Url/UrlService'

describe('User', () => {
  let urlRepository: UrlRepositoryInMemory
  let urlService: UrlService

  beforeEach(() => {
    urlRepository = new UrlRepositoryInMemory()
    urlService = new UrlService(urlRepository)
  })

  test('Deve ser passada a url', async () => {
    const url = ''
    await expect(urlService.createUrl(url)).rejects.toEqual(
      new Error('url is required')
    )
  })

  test('Deve ser passada a shortUrl', async () => {
    const url = ''
    await expect(urlService.findShortUrlService(url)).rejects.toEqual(
      new Error('error uma short url tem que ser passada')
    )
  })

  test('Deve ser retornada a shortUrl', async () => {
    const url = 'www.google.com.br'
    await expect(urlService.findShortUrlService(url))
  })
})
