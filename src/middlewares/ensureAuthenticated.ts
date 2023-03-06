import { type NextFunction, type Request, type Response } from 'express'
import { jwtVerify } from 'jose'

export async function ensureAuthenticated (request: Request, response: Response, next: NextFunction) {
  const authToken = request.headers.authorization
  const jwtSecret = new TextEncoder().encode(process.env.JWT_APP_SECRET)
  if (!authToken) {
    return response.status(401).json({
      message: 'Token is missing'
    })
  }

  const [, token] = authToken.split(' ')
  try {
    await jwtVerify(token, jwtSecret)
    next(); return
  } catch (error) {
    return response.status(401).json({
      message: 'Token invalid'
    })
  }
}
