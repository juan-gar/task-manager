const express = require('express')
require('./db/mongoose')

const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

//Create operations

app.post('/users', async (req,res) => {
    const user = new User(req.body)

    try{
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }

})


app.post('/tasks', async (req,res) => {
    const task = new Task(req.body)

    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }

    // task.save()
    // .then( () => {
    //     res.status(201).send(task)
    // })
    // .catch( (e) => {
    //     res.status(400).send(e.message)
    // })
})

//Read operations

//Users

app.get('/users', async (req,res) => {
    
    try {
        const users = await User.find({})
        res.send(users)
    } catch (e) {
        res.status(500).send(e)
    }

})

//By id

app.get('/users/:id', async (req,res) => {
    const _id = req.params.id
    
    try {
        const user = await User.findById(_id)
        if(!user) {
            res.status(404).send()
        }

        res.send(user)

    } catch(e) {
        res.status(500).send(e)
    }


    // User.findById(_id)

    // .then( (user) => {
    //     if(!user) {
    //         res.status(404).send()
    //     }


    //     res.send(user)
    // })
    // .catch( (e) => {
    //     res.status(500).send(e)
    // })
})



//Read Tasks


app.get('/tasks', async (req,res) => {
    
    try {
        const tasks = await Task.find({})
        res.send(tasks)
    } catch (e) {
        res.status(500).send(e)
    }
    
    // Task.find({})
    // .then( (tasks) => {
    //     res.send(tasks)
    // })
    // .catch( (e) => {
    //     res.status(500).send(e)
    // })
})


//Read task by id

app.get('/tasks/:id', async (req,res) => {
    const _id = req.params.id

    try {
        const task = await Task.findById(_id)
        if(!task) {
            res.status(404).send()
        }

        res.send(task)

    } catch (e) {
        res.status(500).send(e)
    }


    // Task.findById(_id)
    // .then( (task) => {
    //     if(!task) {
    //         res.status(404).send()
    //     }
    //     res.send(task)

    // })
    // .catch( (e) => {
    //     res.status(500).send(e)
    // })
})

//Update operations

app.patch('/users/:id', async (req,res) => {
    const _id = req.params.id

     try {
        const user = await User.findByIdAndUpdate(_id, {
            $set: {
                password: "pepinos"
            },
        },{
            new: true
        })

        if(!user) {
            res.status(404).send()
        }
        res.send(user)

    } catch (e) {
        res.status(500).send(e)
    }

})


app.patch('/tasks/:id', (req,res) => {
    const _id = req.params.id

    try {
        const task = Task.findByIdAndUpdate(_id, req.body,{
            new: true
        })

        if(!task) {
            res.status(404).send()
        }

        res.send(task)

    } catch (e) {
        res.status(500).send(e)
    }

})


app.listen(port , () => {
    console.log('Server is up on port ' + port)
})

