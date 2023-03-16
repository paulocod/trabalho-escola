// @ts-nocheck
// sut = system under test
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import { UserRepositoryInMemory } from '../../../repositories/in-memory/User/UserRepositoryInMemory'
import { UserService } from '../../../services/User/UserService'

describe('User', () => {
  let userRepository: UserRepositoryInMemory
  let userService: UserService

  beforeEach(() => {
    userRepository = new UserRepositoryInMemory()
    userService = new UserService(userRepository)
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  test('Deve ser possivel criar um usuario', async () => {
    const userData = {
      name: 'paulo',
      email: 'paulo@hotmail.com',
      password: '12345678'
    }

    const userDataMock = {
      name: 'paulo',
      email: 'paulo@hotmail.com'
    }

    const user = await userService.createUserService(userData)
    expect(user).toHaveProperty('id')
    expect(user.name).toBe('paulo')
    expect(user).toBeDefined()
    expect(user).toMatchObject(userDataMock)
  })

  test('Não deve ser possivel cadastrar email existente', async () => {
    const userData = {
      name: 'paulo',
      email: 'paulo@hotmail.com',
      password: '12345678'
    }

    await expect(userService.createUserService(userData))
    await expect(userService.createUserService(userData)).rejects.toEqual(
      new Error('Esse email ja esta cadastrado')
    )
  })

  test('Não deve ser possivel cadastrar sem email', async () => {
    const userData = {
      name: 'paulo',
      password: '12345678'
    }
    await expect(userService.createUserService(userData)).rejects.toEqual(
      new Error('Email is required')
    )
  })

  test('Deve ser possivel trazer todos os usuarios', async () => {
    const userData = {
      name: 'paulo',
      email: 'paulo@hotmail.com',
      password: '12345678'
    }
    expect(userService.createUserService(userData))
    expect(userService.allUsersService()).toBeDefined()
    expect(userService.allUsersService()).toBeTypeOf('object')
  })

  test('Não Deve ser possivel trazer todos os usuarios', async () => {
    await expect(userService.allUsersService()).rejects.toEqual(
      new Error('Não existe nenhum usuario no banco de dados')
    )
  })
})
