import { type Request, type Response } from 'express'
import { AuthService } from '../services/authService'

export class AuthController {
  async create (req: Request, res: Response) {
    const { email, password } = req.body
    const service = new AuthService()

    try {
      const token = await service.createToken({ email, password })
      return res.status(200).json(token)
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
