const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')

const userOne = {
   name: 'Mary Lou',
   email: 'marylou@email.com',
   password: '56what!!'
}

beforeEach(async () => {
   await User.deleteMany()
   await new User(userOne).save()
})

test('Should sign up a new user', async () => {
  await request(app).post('/users').send({
    name: 'Jules T',
    email: 'julest4@email.com',
    password: 'MyPass777!'
  }).expect(201)
})

test('Should login existing user', async () => {
  await request(app).post('/users/login').send({
    email: userOne.email,
    password: userOne.password
  }).expect(200)
})



// const userOne = {
//     name: 'Mike',
//     email: 'mike@example.com',
//     password: '56what!!'
// }

// beforeEach(async () => {
//     await User.deleteMany()
//     await new User(userOne).save()
// })

// test('Should signup a new user', async () => {
//     await request(app).post('/users').send({
//         name: 'Andrew',
//         email: 'andrew@example.com',
//         password: 'MyPass777!'
//     }).expect(201)
// })

// test('Should login existing user', async () => {
//     await request(app).post('/users/login').send({
//         email: userOne.email,
//         password: userOne.password
//     }).expect(200)
// })

