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
        const bookList = req.body

        console.log(listID)
        console.log(bookList)

        await dao.addBookToReadingList(listID, bookList)

        res.json({listID, bookList})
    }

    const deleteBookFromReadingList = async (req, res) => {
        const listID = req.params.listID
        const bookInfo = req.body

        await dao.deleteBookFromReadingList(listID, bookInfo.id)

        res.json({listID, bookInfo})
    }

    app.post('/reading-lists', createReadingList)
    app.get('/reading-lists/:userID', getReadingListsByUserID)
    app.delete('/reading-lists/:listID', deleteReadingList)
    app.put('/reading-lists/:listID/add', addBookToReadingList)
    app.put('/reading-lists/:listID/delete', deleteBookFromReadingList)
}

export default ReadingListsController