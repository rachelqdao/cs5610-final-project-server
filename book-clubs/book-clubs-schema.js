import mongoose from 'mongoose';

const bookClubsSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    ownerID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usersModel',
        required: true,
    },
    members: [
        {
            userID: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'usersModel'
            },
            username: String
        }
    ],
    currentBook: {
        id: {
            type: String,
            unique: true
        },
        bookCover: String,
        title: String,
        authors: [String]
    }
}, {collection: 'book-clubs'})

export default bookClubsSchema;