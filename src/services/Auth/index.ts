import { AuthService } from './authService'
import { AuthController } from '../../controllers/Auth/authController'
import { UserRepository } from '../../repositories/UserRepository'

const userRepository = new UserRepository()

const authService = new AuthService(userRepository)

const authController = new AuthController(authService)

export { authController, authService }
