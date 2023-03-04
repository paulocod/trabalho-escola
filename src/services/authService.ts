import { SignJWT } from 'jose'
import { createHash } from 'node:crypto'
import { UserRepository } from '../repositories/UserRepository'

interface AuthProps {
  email: string
  password: string
}

export class AuthService {
  async createToken ({ email, password }: AuthProps) {
    const jwtSecret = new TextEncoder().encode(process.env.JWT_APP_SECRET)
    const alg = 'HS256'
    const passwordHash = createHash('sha256').update(password).digest('hex')

    const userRepository = new UserRepository()
    const userAlreadyExists = await userRepository.findUserEmail(email)

    if (!userAlreadyExists) {
      throw new Error('User or password incorrect.')
    }
    const passwordMatch = (passwordHash === userAlreadyExists.password)

    if (!passwordMatch) {
      throw new Error('User or password incorrect.')
    }
    const token = await new SignJWT({
    })
      .setProtectedHeader({ alg })
      .setExpirationTime('2h')
      .sign(jwtSecret)

    return { token }
  }
}
