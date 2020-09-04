// CRUD

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database')
  }

  const db = client.db(databaseName)

  // db.collection('users').insertOne({
  //   name: 'Julia',
  //   age: 34
  // }, (error, result) => {
  //       if (error) {
  //         return console.log('Unable to insert user')
  //       }

  //       console.log(result.ops)
  // })
    // db.collection('users').insertMany([
    //   {
    //     name: "Izzy",
    //     age: 33
    //   },
    //   {
    //     name: 'Jimmy',
    //     age: 38
    //   }
    // ], (error, result) => {
    //   if (error) {
    //     return console.log('Unable to insert documents')
    //   }

    //   console.log(result.ops)
    // })

    db.collection('tasks').insertMany([
      {
        description: 'Wash dishes',
        completed: true
      },
      {
        description: 'Do laundry',
        completed: false
      },
      {
        description: 'Coding exercises',
        completed: false
      }
    ], (error, result) => {
      if (error) {
        return console.log('Tasks were not inserted')
      } 
      console.log(result.ops)
    })
})
