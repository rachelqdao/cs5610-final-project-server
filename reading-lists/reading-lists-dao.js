import readingListsModel from "./reading-lists-model.js";

export const createReadingList = (readingList) =>
    readingListsModel.create(readingList)

export const findReadingListsByUserID = (userID) =>
    readingListsModel.find({userID})

export const deleteReadingList = (readingListID) =>
    readingListsModel.findOneAndDelete({_id: readingListID})

export const addBookToReadingList = (listID, bookList) =>
    readingListsModel.updateOne({_id: listID},
        { $set : {books: bookList}})

export const deleteBookFromReadingList = (listID, bookID) =>
    readingListsModel.updateOne({_id: listID},
        { $pull : {books: {id: bookID}}})
