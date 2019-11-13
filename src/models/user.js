const mongoose = require('mongoose')
const validator = require('validator')

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

module.exports = User