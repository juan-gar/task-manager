const mongoose = require('mongoose')
const validator = require('validator')

const connectionURL = 'mongodb://127.0.0.1:27017/task-manager-api'

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true
})


const Task = mongoose.model('Task',{
    description: {
            type: String,
            required: true,
            trim: true,
    },
    completed: {
        type: Boolean,
        default: false,
        required: false
    }
})
    
const task = new Task({
    description: "Study Node",
    completed: true
})
    
task.save()
.then( (result) => {
    console.log(result)
})
.catch( (error) => {
    console.log(error)
})


const User = mongoose.model('User',{
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Incorrect email format')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if(!validator.isLength(value,{
                min: 6
            })) {
                throw new Error('Password needs to be at least 6 characters long')
            }

            if (validator.matches(value.toLowerCase(), 'password')) {
                throw new Error('Please choose a different password')
            }
            
        }
    }
})



// const Juan = new User({
//     name: '   Juan   ',
//     email: 'GUERREROSAGRado@gmail.com     ',
//     password: 'Password'
// })

// Juan.save()
// .then( (result) => {
//     console.log(result)
// })
// .catch( (error) => {
//     console.log('Error', error)
// })