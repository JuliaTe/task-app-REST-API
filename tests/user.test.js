const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')

const userOne = {
  name: 'John Does',
  email: 'johndoe@email.com',
  password: 'somepass'
}

beforeEach(async () => {
  await User.deleteMany()
  await new User(userOne).save()
})

test('Should sign up a new user', async () => {
  await request(app).post('/users').send({
    'name': 'Julesz',
    'email': 'julezjs@email.com',
    'password': 'passwor11123'
  }).expect(201)
})

test('Should login existing user', async () => {
  await request(app).post('/user/login')
})
