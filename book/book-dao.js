import bookModel from "./book-model.js";

export const createBook = (book) =>
    bookModel.create(book)

export const findBookReactions = (bookID) =>
    bookModel.findOne({bookID: bookID})

export const reactToBook = (bookID, userID, reaction) =>
    bookModel.updateOne({bookID: bookID},
        {$addToSet: {[reaction]: userID}})

export const undoReactToBook = (bookID, userID, reaction) =>
    bookModel.updateOne({bookID: bookID},
        {$pull: {[reaction]: userID}})