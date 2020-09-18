require('../src/db/mongoose')
const Task = require('../src/models/task')
const User = require('../src/models/user')

// Task.findByIdAndDelete('5f5ae296fe2f23c61c7af5b0').then((task) => {
//   console.log(task)
//   return Task.countDocuments({completed: false})
// }).then((result) => {
//   console.log(result)
// }).catch((e) => {
//   console.log(e)
// })

const deleteTaskAndCount = async (id, completed) => {
  await Task.findByIdAndDelete(id)
  const count = await Task.countDocuments({completed})
  return count
}

deleteTaskAndCount('5f5ac9c55a9e55c2f9254a02', false).then((count) => {
  console.log(count)
}).catch((e) => {
  console.log(e)
})

