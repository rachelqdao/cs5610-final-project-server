import mongoose from "mongoose"

const reviewsSchema = mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usersModel'
    },
    bookID: String,
    rating: Number,
    reviewText: String,
    datePosted: String,
    timePosted: String,
    title: String
}, {collection: 'reviews'})

export default reviewsSchema