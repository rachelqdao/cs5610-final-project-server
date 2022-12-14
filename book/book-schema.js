import mongoose from "mongoose"

const bookSchema = mongoose.Schema({
    bookID: String,
    nice: [
        {
            type: String,
            unique: true
        }
    ],
    loved: [
        {
            type: String,
            unique: true
        }
    ],
    well_written: [
        {
            type: String,
            unique: true
        }
    ],
    confusing: [
        {
            type: String,
            unique: true
        }
    ],
    informative: [
        {
            type: String,
            unique: true
        }
    ],
    hated: [
        {
            type: String,
            unique: true
        }
    ],
}, {collection: "reactions"})

export default bookSchema