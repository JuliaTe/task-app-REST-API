// CRUD

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id.toHexString())

MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database')
  }

  const db = client.db(databaseName)

  db.collection('users').findOne({ _id: new ObjectID('5f52ac6ee1f7b773df1ac556')}, (error, user) => {
    if (error) {
      return console.log('Unable to fetch')
    }

    // console.log(user)
  })

  db.collection('users').find({ age: 33 }).toArray((error, users) => {
    // console.log(users)
  })

  db.collection('tasks').findOne({ _id: new ObjectID('5f52ba2c7efe767574031e18') }, (error, task) => {
    if (error) {
      return console.log('Unable to retrieve task')
    }
    console.log(task)
  })

  db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    if (error) {
      return console.log('Unable to retrieve tasks')
    }
    console.log(tasks)
  })
})
