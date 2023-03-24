// import request from 'supertest'
// import { expect, test } from 'vitest'
// import { app } from '../../../app'

// test('create user feature', async () => {
//   const userData = {
//     name: 'paulo',
//     email: 'paulo@hotmail.com',
//     password: '12345678'
//   }

//   const userDataMock = {
//     name: 'paulo',
//     email: 'paulo@hotmail.com'
//   }

//   const userAuth = request.agent(app)

//   const response = await userAuth
//     .post('/user')
//     .send(userData)

//   expect(response.status).toBe(200)
//   expect(response.body).toBe(userDataMock)
// })
