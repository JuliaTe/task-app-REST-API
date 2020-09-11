const mongoose = require('mongoose')

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
    trim: true
  }
})

module.exports = Task