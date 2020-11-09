const app = require('./app')
const port = process.env.PORT

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})






// const express = require('express')
// require('./db/mongoose')
// const userRouter = require('./routers/user')
// const taskRouter = require('./routers/task')


// const app = express()
// const port = process.env.PORT

// middlewear
// app.use((req, res, next) => { // next is specific to middlewear
//   if (req.method === 'GET') {
//     res.send('GET requests are disabled')
//   } else {
//     next()
//   }
// })


// app.use((req, res, next) => {
//   if (req) {
//     res.status(503).send('Site is under maintenance. Please try back soon')
//   }
// })

// app.use(express.json())
// app.use(userRouter)
// app.use(taskRouter)




// const bcrypt = require('bcryptjs')

// const myFunction = async () => {
//     const password = 'Red12345!'
//     const hashedPassword = await bcrypt.hash(password, 8)

//     console.log(password)
//     console.log(hashedPassword)

//     const isMatch = await bcrypt.compare('red12345!', hashedPassword)
//     console.log(isMatch)
// }

// jwt practice
// const jwt =require('jsonwebtoken')

// const myFunction = async () => {
//   const token = jwt.sign({ _id: 'abc123' }, 'thisisnewtoken', { expiresIn: '7 days' })
  
//   const data = jwt.verify(token, 'thisisnewtoken')
//   console.log(data)
// }

// myFunction()

// why .toJSON hides data

// const pet = {
//   name: "Lora"
// }

// pet.toJSON = function() {
//   return {}
// }

// console.log(JSON.stringify(pet))

// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
  // const task = await Task.findById('5f864e2c5f147672424423b4')
  // await task.populate('owner').execPopulate()
  // console.log(task.owner)

//   const user = await User.findById('5f864cf1e53e40718d6c304f')
//   await user.populate('tasks').execPopulate()
//   console.log(user.tasks)
// }

// main()

// const multer = require('multer')
// const upload = multer({
//   dest: 'images',
//   limit: {
//     fileSize: 1000000
//   },
//   fileFilter(req, file, cb) {
//     if (!file.originalname.match(/\.(doc|docs)$/)) {
//       return cb(new Error('Please upload a Word document'))
//     }
//   }
// })

// const errorMiddleware = (req, res, next) => {
//   throw new Error("This is middlewear")
// }

// app.post('/upload', upload.single('upload'), (req, res) => {
//   res.send()
// }, (error, req, res, next) => {
//   res.status(400).send({ error: error.message })
// })