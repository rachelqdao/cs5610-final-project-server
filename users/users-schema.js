import mongoose from "mongoose"

const usersSchema = mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: String,
    userType: {type: String, enum: ['USER', 'AUTHOR', 'ADMIN']},
    firstName: String,
    lastName: String,
    dateJoined: Date,
}, {collection: 'users'})

export default usersSchema
