import * as dao from './users-dao.js'

const UsersController = (app) => {
    const createUser = async (req, res) => {
        const user = req.body
        const actualUser = await dao.createUser(user)
        res.json(actualUser)
    }

    const findAllUsers = async (req, res) => {
        const users = await dao.findAllUsers()
        res.json(users)
    }

    const findUserByID = async (req, res) => {
        const uid = req.params.uid
        const user = await dao.findUserByID(uid)
        res.json(user)
    }

    const deleteUser = async (req, res) => {
        const uid = req.params.uid
        const status = await dao.deleteUser(uid)
        res.json(status)
    }

    const updateUser = async (req, res) => {
        const uid = req.params.uid;
        const updates = req.body;
        console.log(`in user controller BE: ${uid}`);
        console.log(`in user controller BE: ${updates.email}`);
        const status = await dao.updateUser(uid, updates);
        res.json(status)
    }

    const register = async (req, res) => {
        const user = req.body
        const existingUser = await dao.findByUsername(user.username)

        if (existingUser) {
            res.sendStatus(403)
            return
        }

        req.session['currentUser'] = await dao.createUser(user)
        res.json(req.session['currentUser'])
    }

    const login = async (req, res) => {
        const credentials = req.body
        const existingUser = await dao.findByCredentials(credentials.username, credentials.password)

        if (existingUser) {
            req.session['currentUser'] = existingUser
            res.json(existingUser)
            return
        }

        res.sendStatus(403)
    }

    const profile = async (req, res) => {
        if (req.session['currentUser']) {
            res.json(req.session['currentUser'])
            return
        }
        res.sendStatus(403)
    }

    const logout = async (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    }

    app.post('/users', createUser)
    app.get('/users', findAllUsers)
    app.delete('/users/:uid', deleteUser)
    app.put('/users/:uid', updateUser)
    app.get('/users/:uid', findUserByID)

    app.post('/register', register)
    app.post('/login', login)
    app.post('/profile', profile)
    app.post('/logout', logout)
}

export default UsersController