import { type Request, type Response } from 'express'
import { type AuthService } from '../../services/Auth/authService'

export class AuthController {
  constructor (
    private authService: AuthService
  ) { }

  async create (req: Request, res: Response) {
    const { email, password } = req.body

    try {
      const token = await this.authService.createToken({ email, password })
      return res.status(200).json(token)
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
