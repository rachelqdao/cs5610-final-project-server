

const ReadingListsController = (app) => {
    const createReadingList = async (req, res) => {
        const readingList = req.body
        const currentUser = req.session['currentUser']
        readingList.userID = currentUser._id
        readingList.books = []

        res.json(readingList)
    }


    app.post('/reading-lists', createReadingList)
}

export default ReadingListsController