import { createHash } from 'node:crypto'
import { redisClient } from '../../helpers/redis'
import { type UserRepository } from '../../repositories/UserRepository'
import { RabbitMqServer } from '../../helpers/rabbitMQ'

interface UserProps {
  name: string
  email: string
  password: string
}

const ampqCloud = process.env.CLOUDAMQP_URL ?? ''
export class UserService {
  constructor (
    private userRepository: UserRepository
  ) {}

  async createUserService ({ name, email, password }: UserProps) {
    if (!email) {
      throw new Error('Email is required')
    }
    const emailExists = await this.userRepository.findUserEmail(email)

    if (emailExists) {
      throw new Error('Esse email ja esta cadastrado')
    }
    const passwordHash = createHash('sha256').update(password).digest('hex')

    const user = await this.userRepository.createUser({ name, email, passwordHash })
    return user
  }

  async detailUsersService (id: string) {
    try {
      console.time()
      const userCache = await redisClient.get(`user-${id}`)
      if (userCache) {
        console.log('redis')
        console.timeEnd()
        return userCache
      }
    } catch (error) {
      throw new Error('não foi possivel se conectar ao Redis')
    }
    console.time()
    const user = await this.userRepository.findOneUser(id)
    if (!user) {
      throw new Error('Não existe nenhum usuario no banco de dados')
    }
    console.log('banco')
    console.timeEnd()
    const rabbit = new RabbitMqServer(ampqCloud)
    await rabbit.start()
    await rabbit.consumeQueue('queue', (message) => console.log(message.content.toString()))
    return user
  }

  async allUsersService () {
    const users = await this.userRepository.findAllUsers()
    if (!users.length) {
      throw new Error('Não existe nenhum usuario no banco de dados')
    }
    return users
  }
}
