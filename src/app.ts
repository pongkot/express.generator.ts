import * as express from 'express'
import * as path from 'path'
import * as logger from 'morgan'
import * as cookieParser from 'cookie-parser'
import * as createError from 'http-errors'

const { indexRoute } = require('./routes/index')
const { usersRoute } = require('./routes/users')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '../public')))

// routing setup
app.use('/', indexRoute)
app.use('/users', usersRoute)

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(400));
})

// error handler
// @ts-ignore
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

export { app }
