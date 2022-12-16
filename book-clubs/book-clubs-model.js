import mongoose from "mongoose";
import bookClubsSchema from "./book-clubs-schema.js";

const bookClubsModel = mongoose.model(
    'bookClubsModel', bookClubsSchema
)

export default bookClubsModel;