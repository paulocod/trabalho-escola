import { type Request, type Response } from 'express'
import { type UserService } from '../../services/User/UserService'

export class UserController {
  constructor (
    private userService: UserService
  ) { }

  async create (req: Request, res: Response) {
    const { name, email, password } = req.body

    try {
      await this.userService.createUserService({ name, email, password })
      return res.status(200).json({ name, email })
    } catch (error) {
      return res.status(400).send({ error: 'Ocorreu um erro com a aplicação' })
    }
  }

  async detailUser (req: Request, res: Response) {
    const { id } = req.params

    try {
      const user = await this.userService.detailUserService(id)
      return res.status(200).send(user)
    } catch (error) {
      return res.status(400).send({ error: 'Ocorreu um erro com a aplicação' })
    }
  }

  async allUsers (req: Request, res: Response) {
    try {
      const allUsers = await this.userService.allUsersService()
      return res.status(200).json({ allUsers })
    } catch (error) {
      return res.status(400).send({ error: 'Ocorreu um erro com a aplicação' })
    }
  }
}
