const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('../../src/models/user')

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

const setupDatabase = async () => {
    await User.deleteMany()
    await new User(userOne).save()
}

module.exports = {
  userOneId,
  userOne,
  setupDatabase
}
