import readingListsModel from "./reading-lists-model.js";

export const createReadingList = (readingList) =>
    readingListsModel.create(readingList)

export const findReadingListsByUserID = (userID) =>
    readingListsModel.find({userID})

export const deleteReadingList = (readingListID) =>
    readingListsModel.deleteOne({_id: readingListID})

export const addBookToReadingList = (listID, bookID) =>
    readingListsModel.updateOne({_id: listID},
        { $addToSet : {books: bookID}})

export const deleteBookFromReadingList = (listID, bookID) =>
    readingListsModel.updateOne({_id: listID},
        { $pull : {books: bookID}})
