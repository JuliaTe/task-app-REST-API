require('../src/db/mongoose')
const User = require('../src/models/user')

// 5f594ae148ef1898483682fc

// User.findByIdAndUpdate('5f594c6451315e98eef0015a', { age: 1 }).then((user) => {
//   console.log(user)
//   return User.countDocuments({ age: 1})
// }).then((result) => {
//   console.log(result)
// }).catch((e) => {
//   console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age })
  const count = await User.countDocuments({ age })
  return count
}

updateAgeAndCount('5f5ac9db4eaeb8c3057ff300', 99).then((count) => {
  console.log(count)
}).catch((e) => {
  console.log(e)
})
