import { prisma } from '../prisma/index'

interface UserProps {
  name: string
  email: string
  password: string
}
export class UserRepository {
  async createUserRepository ({ name, email, password }: UserProps) {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password
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
