import { UserRepository } from '../repositories/UserRepository'
import { createHash } from 'node:crypto'
import { redisClient } from '../helpers/redis'

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
    const passwordHash = createHash('sha256').update(password).digest('hex')

    await userRepository.createUser({ name, email, passwordHash })
  }

  async detailUserService (id: string) {
    const userRepository = new UserRepository()
    console.time()
    const userCache = await redisClient.get(`user-${id}`)
    if (userCache) {
      console.log('redis')
      console.timeEnd()
      return userCache
    }
    console.time()
    const user = await userRepository.findOneUser(id)
    if (!user) {
      throw new Error('Não existe nenhum usuario no banco de dados')
    }
    console.log('banco')
    console.timeEnd()
    return user
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
