

const ReadingListsController = (app) => {
    const createReadingList = async (req, res) => {
        const readingList = req.body
        const currentUser = req.session['currentUser']
        readingList.userID = currentUser._id

        res.json(readingList)
    }
}