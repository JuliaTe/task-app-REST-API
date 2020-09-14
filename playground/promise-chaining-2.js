require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5f5ae296fe2f23c61c7af5b0').then((task) => {
  console.log(task)
  return Task.countDocuments({completed: false})
}).then((result) => {
  console.log(result)
}).catch((e) => {
  console.log(e)
})