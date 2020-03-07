import * as express from 'express'
const indexRoute = express.Router()

indexRoute.get('/', (req, res, next) => {
  res.render('index', { title: 'TS.Express'})
})

export { indexRoute }
