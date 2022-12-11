import reviewsModel from "./reviews-model.js";

export const createReview = (review) =>
    reviewsModel.create(review)

export const findReviewsByBookID = (bookID) =>
    reviewsModel
        .find({bookID})
        .populate('userID')
        .exec()

export const findReviewsByUserID = (userID) =>
    reviewsModel.find()

export const deleteReview = (reviewID) =>
    reviewsModel.deleteOne({_id: reviewID})

