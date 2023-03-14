import { randomUUID } from 'node:crypto'

interface UserProps {
  id: string
  name: string
  email: string
  passwordHash: string
}

export class UserRepositoryInMemory {
  private users: UserProps[] = []
  async createUser ({ name, email, passwordHash }: UserProps) {
    const user: UserProps = {
      name,
      email,
      passwordHash,
      id: ''
    }
    if (!user.id) {
      Object.assign(user, {
        id: randomUUID()
      })
    }
    this.users.push(user)
    return user
  }

  async findOneUser (id: string) {
    const user = this.users.some((user) => user.id === id)
    return user
  }

  async findUserEmail (email: string) {
    const user = this.users.some((user) => user.email === email)
    return user
  }

  async findAllUsers () {
    return this.users
  }
}
