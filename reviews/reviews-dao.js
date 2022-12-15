import reviewsModel from "./reviews-model.js";

export const createReview = (review) =>
    reviewsModel.create(review)


export const findReviewsByBookID = (bookID) =>
    reviewsModel
        .find({bookID})
        .populate('userID')
        .exec()

export const findReviewsByUserID = (userID) =>
    reviewsModel
        .find({userID})
        .populate('userID')
        .exec()

export const deleteReview = (reviewID) =>
    reviewsModel.findOneAndDelete({_id: reviewID})

export const findAllReviews = () =>
    reviewsModel
        .find()
        .populate('userID')
        .exec()
