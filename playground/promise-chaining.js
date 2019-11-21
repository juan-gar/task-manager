require('../src/db/mongoose')

const Task = require('../src/models/task')



// Task.findByIdAndDelete("5dca7ed943d457164d292185")
// .then( (task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// })
// .then( (incompleteTasks) => {
//     console.log(incompleteTasks)
// })
// .catch( (e) => {
//     console.log(e)
// })


const deleteTaskAndCount = async (id) => {
    const user = await Task.findByIdAndDelete(id)
    const countTasks = await Task.countDocuments({
        completed: false
    })
    return countTasks
}

deleteTaskAndCount("5dd3edd7a22e0d7b51d1633f")
.then( (result) => {
    console.log(result)
})
.catch( (e) => {
    console.log(e)
})