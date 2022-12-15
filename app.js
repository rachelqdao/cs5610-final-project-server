import express from 'express';
import mongoose from 'mongoose';
import cors from "cors";
import session from 'express-session'
import UsersController from "./users/users-controller.js";
import ReviewsController from "./reviews/reviews-controller.js";
import ReadingListsController from "./reading-lists/reading-lists-controller.js";
import BookController from "./book/book-controller.js";
import BookClubsController from "./book-clubs/book-clubs-controller.js";

/* connect to mongo database */
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
}

mongoose.connect('mongodb://localhost:27017/bookworm', options);

/* configure session and cookies */
const app = express();

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))

app.use(session({
    secret: 'should be an environment variable',
    resave: false,
    saveUninitialized: false,
    cookie: {secure: false}
}))

app.use(express.json())

/* controllers */
BookClubsController(app)
UsersController(app)
ReviewsController(app)
ReadingListsController(app)
BookController(app)

app.listen(4000)

