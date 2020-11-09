const request = require('supertest')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const app = require('../src/app')
const User = require('../src/models/user')

// Creating a default user
const userOneId = new mongoose.Types.ObjectId()
const userOne = {
  _id: userOneId,
   name: 'Mary Lou',
   email: 'marylou@email.com',
   password: '56what!!',
   tokens: [{
     token: jwt.sign({ _id: userOneId }, process.env.USER_TOKEN)
   }]
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

test('Should not login a user with bad credentials', async () => {
  await request(app).post('/users/login').send({
    email: userOne.email,
    password: 'somepass123'
  }).expect(400)
})

test('Should get profile for user', async () => {
  await request(app)
  .get('/users/me')
  .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
  .send()
  .expect(200)
})