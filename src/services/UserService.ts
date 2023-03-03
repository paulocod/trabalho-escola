import { UserRepository } from '../repositories/UserRepository'

interface UserProps {
  name: string
  email: string
  password: string
}

export class UserService {
  async createUserService ({ name, email, password }: UserProps) {
    const userRepository = new UserRepository()
    if (!email) {
      throw new Error('Email is required')
    }
    const emailExists = await userRepository.findUserEmail(email)

    if (emailExists) {
      throw new Error('Esse email ja esta cadastrado')
    }
    await userRepository.createUserRepository({ name, email, password })
  }

  async allUsersService () {
    const userRepository = new UserRepository()
    const users = await userRepository.findAllUsers()
    if (!users) {
      throw new Error('Não existe nenhum usuario no banco de dados')
    }
    return users
  }
}
