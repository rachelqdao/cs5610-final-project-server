import * as dao from "./reviews-dao.js"

const ReviewsController = (app) => {
    const createReview = async (req, res) => {
        const review = req.body
        const currentUser = req.session['currentUser']
        review.userID = currentUser._id
        review.datePosted = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
        review.timePosted = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})

        const actualReview = await dao.createReview(review)
        res.json(actualReview)
    }

    const findReviewsByBookID = async (req, res) => {
        const bookID = req.params.bookID
        const reviews = await dao.findReviewsByBookID(bookID)
        res.json(reviews)
    }

    const findReviewsByUserID = async (req, res) => {
        const userID = req.params.userID
        const reviews = await dao.findReviewsByUserID(userID)
        res.json(reviews)
    }

    const deleteReview = async (req, res) => {
        const reviewID = req.params.reviewID
        const reviews = await dao.deleteReview(reviewID)
        res.json(reviews)
    }

    app.post('/reviews', createReview)
    app.get('/reviews/books/:bookID', findReviewsByBookID)
    app.get('/reviews/users/:userID', findReviewsByUserID)
    app.delete('/reviews/:reviewID', deleteReview)

}

export default ReviewsController