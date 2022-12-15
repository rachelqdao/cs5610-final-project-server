import mongoose from "mongoose"
import bookSchema from "./book-schema.js";

const bookModel = mongoose.model(
    'bookModel', bookSchema)

export default bookModel