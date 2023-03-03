import { type Request, type Response } from 'express'
import { UserService } from '../services/UserService'

export class UserController {
  async create (req: Request, res: Response) {
    const { name, email, password } = req.body
    const service = new UserService()
    try {
      await service.createUserService({ name, email, password })
      return res.status(200).json({ name, email })
    } catch (error) {
      console.log(error)
      return res.status(400).send({ error: 'Ocorreu um erro com a aplicação' })
    }
  }

  async allUsers (req: Request, res: Response) {
    const service = new UserService()
    try {
      const allUsers = await service.allUsersService()
      return res.status(200).json({ allUsers })
    } catch (error) {
      console.log(error)
      return res.status(400).send({ error: 'Ocorreu um erro com a aplicação' })
    }
  }
}
