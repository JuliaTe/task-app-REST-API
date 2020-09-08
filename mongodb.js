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

    // db.collection('tasks').insertMany([
    //   {
    //     description: 'Wash dishes',
    //     completed: true
    //   },
    //   {
    //     description: 'Do laundry',
    //     completed: false
    //   },
    //   {
    //     description: 'Coding exercises',
    //     completed: false
    //   }
    // ], (error, result) => {
    //   if (error) {
    //     return console.log('Tasks were not inserted')
    //   } 
    //   console.log(result.ops)
    // })

        // db.collection('users').findOne({ _id: new ObjectID("5c1113239cbfe605241f9071") }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 27 }).toArray((error, users) => {
    //     console.log(users)
    // })

  // db.collection('tasks').findOne({ _id: new ObjectID("5c0fec243ef6bdfbe1d62e2f") }, (error, task) => {
  //     console.log(task)
  // })

  // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
  //     console.log(tasks)
  // })

  // Updating documents

  // db.collection('users').updateOne({
  //   _id: new ObjectID('5f529e44ca09fa71fa91de8c')
  // }, {
  //   $inc: {
  //     age: -5
  //   }
  // }).then((result) => {
  //   console.log(result)
  // }).catch((error) => {
  //   console.log(error)
  // })

  // Update many

  db.collection('tasks').updateMany({
    completed: false
  }, {
    $set: { // using update operator
      completed: true
    }
  }).then((result) => {
    console.log(result.matchedCount)
  }).catch((error) => {
    console.log('Failed')
  })
})
