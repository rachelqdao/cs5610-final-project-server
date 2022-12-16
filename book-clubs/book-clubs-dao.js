import bookClubsModel from "./book-clubs-model.js";
import reviewsModel from "../reviews/reviews-model.js";

export const createBookClub = (bookClub) =>
    bookClubsModel.create(bookClub);

export const findBookClubByOwnerID = (oid) =>
    bookClubsModel
        .findOne({oid})
        .populate("ownerID")
        .exec();

export const findAllBookClubs = () =>
    bookClubsModel.find();

export const findMembersByBCID = (bcID) => {
    bookClubsModel.find({bcID}).populate("members").exec();
}

export const addMemberToBookClub = (bcID, mid, username) => {
    bookClubsModel.findOneAndUpdate({_id: bcID},
        { $push: { members: {_id: mid, username: username}}},
        function (error, success) {
            if (error) {
                console.log(error);
            } else {
                console.log(`success: ${success}`);
            }
        });
}

export const findBookClubByID = (bcID) =>
    reviewsModel.create() // TODO

export const findBookClubUsers = (bcID) =>
    reviewsModel.create() // TODO

