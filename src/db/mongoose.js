const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true
})

// const User = mongoose.model('User', {
//   name: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     loewrcase: true,
//     validate(value) { // Adding validation using validator package
//       if (!validator.isEmail(value)) {
//         throw new Error('Email is invalid')
//       }
//     }
//   },
//   age: {
//     type: Number,
//     default: 0,
//     validate(value) { // Adding custom validation
//       if (value < 0) {
//         throw new Error('Age must be a positive number')
//       }
//     }
//   },
//   password: {
//     type: String,
//     required: true,
//     trim: true,
//     minLength: 7,
//     validate(value) {
//       if (value.toLowerCase().includes('password')) {
//         throw new Error('Password can not be password') 
//     }
//   }
// }
// })

// const me = new User({
//   name: 'Thea  ',
//   email: 'jules@jul.com  ',
//   password: 'pass'
// })

// me.save().then(() => {
//   console.log(me)
// }).catch((error) => {
//   console.log('Error!', error)
// })

const Task = mongoose.model('Task', {
  name: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  description: {
    type: String,
    required: true,
    trim: true
  }
})

const homeTask = new Task({
  name: 'Clean the house',
  description: "Just do it",
  completed: false
})

homeTask.save().then(() => {
  console.log(homeTask)
}).catch((error) => {
  console.log('Error!', error)
})