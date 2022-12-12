import * as dao from "./reading-lists-dao.js"

const ReadingListsController = (app) => {
    const createReadingList = async (req, res) => {
        const readingList = req.body
        const currentUser = req.session['currentUser']
        readingList.userID = currentUser._id
        readingList.books = []

        const actualReadingList = await dao.createReadingList(readingList)
        res.json(actualReadingList)
    }

    const getReadingListsByUserID = async (req, res) => {
        const userID = req.params.userID
        const readingLists = await dao.findReadingListsByUserID(userID)
        res.json(readingLists)
    }

    const deleteReadingList = async (req, res) => {
        const readingListID = req.params.listID
        const readingLists = await dao.deleteReadingList(readingListID)
        res.json(readingLists)
    }

    const addBookToReadingList = async (req, res) => {
        const listID = req.params.listID
        const bookID = req.params.bookID

        const status = await dao.addBookToReadingList(listID, bookID)

        res.json(status)
    }

    const deleteBookFromReadingList = async (req, res) => {
        const listID = req.params.listID
        const bookID = req.params.bookID

        const status = await dao.deleteBookFromReadingList(listID, bookID)

        res.json(status)
    }

    app.post('/reading-lists', createReadingList)
    app.get('/reading-lists/:userID', getReadingListsByUserID)
    app.delete('/reading-lists/:listID', deleteReadingList)
    app.put('/reading-lists/:listID/:bookID/add', addBookToReadingList)
    app.put('/reading-lists/:listID/:bookID/delete', deleteBookFromReadingList)
}

export default ReadingListsController