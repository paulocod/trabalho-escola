import { UserRepository } from '../../repositories/UserRepository'
import { UserService } from './UserService'
import { UserController } from '../../controllers/User/UserController'

const userRepository = new UserRepository()

const userService = new UserService(userRepository)

const userController = new UserController(userService)

export { userService, userController }
