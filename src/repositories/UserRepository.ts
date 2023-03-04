import { prisma } from '../prisma/index'
interface UserProps {
  name: string
  email: string
  passwordHash: string
}
export class UserRepository {
  async createUser ({ name, email, passwordHash }: UserProps) {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: passwordHash
      }
    })

    return user
  }

  async findOneUser (id: string) {
    const user = await prisma.user.findFirst({
      where: {
        id
      }
    })
    return user
  }

  async findUserEmail (email: string) {
    const emailExists = await prisma.user.findFirst({
      where: { email }
    })
    return emailExists
  }

  async findAllUsers () {
    const allUsers = await prisma.user.findMany()
    return allUsers
  }
}
