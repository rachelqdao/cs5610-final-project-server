import bookClubsModel from "./book-clubs-model.js";
import reviewsModel from "../reviews/reviews-model.js";

export const createBookClub = (bookClub) =>{
    console.log(`in dao with bc ${bookClub.name} and ${bookClub.ownerID}`);
    bookClubsModel.create(bookClub);
}


export const findAllBookClubs = () =>
    bookClubsModel.find();

export const findBookClubByID = (bcID) =>
    reviewsModel.create() // TODO

export const findBookClubUsers = (bcID) =>
    reviewsModel.create() // TODO