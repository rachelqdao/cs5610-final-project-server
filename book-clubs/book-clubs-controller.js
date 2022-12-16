import  * as dao from "./book-clubs-dao.js";
import {createBookClub, findAllBookClubs, findBookClubByOwnerID} from "./book-clubs-dao.js";

const BookClubsController = (app) => {
    const createBookClub = async (req, res) => {
        const bookClub = req.body;
        const currentUser = req.session['currentUser'];
        bookClub.ownerID = currentUser._id
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
        res.json(bookClubs)
    }

    const findMembersByBCID = async (req, res) => {
        const bcID = req.params.bcID;
        const members = await dao.findMembersByBCID(bcID);
        res.json(members);
    }

    const addMemberToBookClub = async (req, res) => {
        const bcID = req.params.bcID;
        const mid = req.params.mid;
        const username = req.params.username;
        await dao.addMemberToBookClub(bcID, mid, username);
        res.json({bcID, mid, username});
    }
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
    app.get('/book-clubs/:bcID/members', findMembersByBCID);
    app.put('/book-clubs/:bcID/:mid/:username', addMemberToBookClub);
}

export default BookClubsController;