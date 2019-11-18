const express = require('express')
require('./db/mongoose')

const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

//Create operations

app.post('/users', (req,res) => {
    const user = new User(req.body)

    user.save()
    .then( () => {
        res.status(201).send(user)
    })
    .catch( (e) => {
        res.status(400).send(e.message)
    })
})

app.post('/tasks', (req,res) => {
    const task = new Task(req.body)

    task.save()
    .then( () => {
        res.status(201).send(task)
    })
    .catch( (e) => {
        res.status(400).send(e.message)
    })
})

//Read operations

//Users

app.get('/users', (req,res) => {
    User.find({})
    .then( (users) => {
        res.send(users)
    })
    .catch( (e) => {
<<<<<<< HEAD
        res.status(500).send()
    })
})

app.get('/users/:id', (req,res) => {
    const _id = req.params.id
    User.findById(_id)

=======
        res.send(e)
    })
})

//By id

app.get('/users/:id', (req,res) => {
    const _id = req.params.id
    
    User.findById(_id)
>>>>>>> e5833206eccda716f535f74784f5a68511aa4fa9
    .then( (user) => {
        if(!user) {
            res.status(404).send()
        }
<<<<<<< HEAD
        
=======
>>>>>>> e5833206eccda716f535f74784f5a68511aa4fa9
        res.send(user)
    })
    .catch( (e) => {
        res.status(500).send(e)
    })
})

<<<<<<< HEAD

//Tasks
=======
//Read Tasks
>>>>>>> e5833206eccda716f535f74784f5a68511aa4fa9

app.get('/tasks', (req,res) => {
    Task.find({})
    .then( (tasks) => {
        res.send(tasks)
    })
    .catch( (e) => {
        res.status(500).send(e)
    })
})

<<<<<<< HEAD
app.get('/tasks/:id', (req,res) => {
    const id = req.params.id
    
    Task.findById(id)
    .then( (task) => {
        if(!task) {
            res.status(404).send()
        }

        res.status(200).send(task)
=======
//Read task by id

app.get('/tasks/:id', (req,res) => {
    const _id = req.params.id

    Task.findById(_id)
    .then( (task) => {
        if(!task) {
            res.status(404).send()
        }
        res.send(task)
>>>>>>> e5833206eccda716f535f74784f5a68511aa4fa9
    })
    .catch( (e) => {
        res.status(500).send(e)
    })
})




app.listen(port , () => {
    console.log('Server is up on port ' + port)
})

