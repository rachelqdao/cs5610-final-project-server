import  * as dao from "./book-clubs-dao.js";
import {createBookClub} from "./book-clubs-dao.js";

const BookClubsController = (app) => {
    const createBookClub = async (req, res) => {
        // we get the name in the body
        const bookClub = req.body;
        bookClub.ownerID = req.body.ownerID.ownerID;
        console.log(`in controller with bc ${bookClub.name} and ${bookClub.ownerID}`)
        bookClub.members = [];
        bookClub.currentBook = {};

        const newBookClub = await dao.createBookClub(bookClub);
        res.json(newBookClub);
    }
    //
    // const addUserToBookClub async (req, res) => {
    //     res.json(req.body) // TODO
    // }
    //
    // const updateCurrentBook async (req, res) => {
    //     res.json(req.body) // TODO
    // }
    //
    // const getBookClubByID async (req, res) => {
    //     res.json(req.body) // TODO
    // }
    //
    // const getAllBookClubs async (req, res) => {
    //     res.json(req.body) // TODO
    // }


    app.post('/book-clubs', createBookClub);
}

export default BookClubsController;