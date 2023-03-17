import { SignJWT } from 'jose'
import { createHash } from 'node:crypto'
import { redisClient } from '../../helpers/redis'
import { type UserRepository } from '../../repositories/UserRepository'

interface AuthProps {
  email: string
  password: string
}

export class AuthService {
  constructor (
    private userRepository: UserRepository
  ) { }

  async createToken ({ email, password }: AuthProps) {
    const jwtSecret = new TextEncoder().encode(process.env.JWT_APP_SECRET)
    const alg = 'HS256'

    const passwordHash = createHash('sha256').update(password).digest('hex')
    const userAlreadyExists = await this.userRepository.findUserEmail(email)

    if (!userAlreadyExists) {
      throw new Error('User or password incorrect.')
    }
    const passwordMatch = (passwordHash === userAlreadyExists.password)

    if (!passwordMatch) {
      throw new Error('User or password incorrect.')
    }
    const token = await new SignJWT({})
      .setProtectedHeader({ alg })
      .setExpirationTime('2h')
      .sign(jwtSecret)
    try {
      await redisClient.set(`user-${userAlreadyExists.id}`, JSON.stringify(userAlreadyExists))
    } catch (error) {
      throw new Error('não foi possivel salvar a chave ao redis')
    }
    console.log(`add ao redis id: ${userAlreadyExists.name}`)
    return { token }
  }
}
