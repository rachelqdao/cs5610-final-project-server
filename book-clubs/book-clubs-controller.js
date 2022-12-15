import  * as dao from "./book-clubs-dao.js";
import {createBookClub, findAllBookClubs, findBookClubByOwnerID} from "./book-clubs-dao.js";

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

    const findBookClubByOwnerID = async (req, res) => {
        const ownerID = req.params.oid;
        const bookClub = await dao.findBookClubByOwnerID(ownerID);
        res.json(bookClub);
    }

    const findAllBookClubs = async (req, res) => {
        const bookClubs = await dao.findAllBookClubs();
        res.json(bookClubs);
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
    app.get('/book-clubs/:oid', findBookClubByOwnerID);
    app.get('/book-clubs/', findAllBookClubs);
}

export default BookClubsController;