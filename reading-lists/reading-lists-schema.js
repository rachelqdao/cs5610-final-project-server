import mongoose from "mongoose"

const readingListsSchema = mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usersModel'
    },
    listName: String,
    description: String,
    books: [
        {
            id: {
                type: String,
                unique: true
            },
            bookCover: String,
            title: String,
            authors: [String]
        }
    ]
}, {collection: 'reading-lists'})

export default readingListsSchema