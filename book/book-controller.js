import * as dao from "./book-dao.js"

const BookController = (app) => {
    const findBookReactions = async (req, res) => {
        const bookID = req.params.bookID
        const book = await dao.findBookReactions(bookID)
        res.json(book)
    }

    const reactToBook = async (req, res) => {
        const bookID = req.params.bookID
        const reaction = req.params.reaction
        const currentUser = req.session['currentUser']
        const userID = currentUser._id

        // if no book in our database, create it
        const findBook = await dao.findBookReactions(bookID)

        if (findBook) {
            await dao.reactToBook(bookID, userID, reaction)
        } else {
            await dao.createBook({
                bookID: bookID,
                nice: [],
                loved: [],
                well_written: [],
                confusing: [],
                informative: [],
                hated: []
            })
            await dao.reactToBook(bookID, userID, reaction)
        }

        res.json({userID, reaction})
    }

    const undoReactToBook = async (req, res) => {
        const bookID = req.params.bookID
        const reaction = req.params.reaction
        const currentUser = req.session['currentUser']
        const userID = currentUser._id

        await dao.undoReactToBook(bookID, userID, reaction)

        res.json({userID, reaction})
    }

/*
    app.post('/book', createBook)
*/
    app.get('/book/:bookID', findBookReactions)
    app.put('/book/:bookID/react/:reaction', reactToBook)
    app.put('/book/:bookID/undoReact/:reaction', undoReactToBook)
}

export default BookController