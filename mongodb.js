const { MongoClient, ObjectID } = require('mongodb')
const mongoose = require(mongoose)
// const MongoClient = mongodb.MongoClient
// const objectID = mongodb.ObjectID


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error,client) => {
    if (error) {
        return console.log('Unable to connect to db')
    }

    const db = client.db(databaseName)



    

    db.collection('tasks').deleteMany({
        completed: true
    })
    .then( (result) => {
        console.log(result.deletedCount)
    })
    .catch( (error) => {
        console.log(error)
    })

})