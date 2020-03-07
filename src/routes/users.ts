import * as express from 'express'
const usersRoute = express.Router()

usersRoute.get('/', (req, res) => {
    res.send('respond with a resource')
})

export { usersRoute }
