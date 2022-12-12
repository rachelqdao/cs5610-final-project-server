import mongoose from "mongoose"
import readingListsSchema from "./reading-lists-schema.js";

const readingListsModel = mongoose.model(
    'readingListsModel', readingListsSchema)

export default readingListsModel