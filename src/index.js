const express = require('express')
const app = express()
const path = require('path')
const passport = require('passport')

const auth = require('./api/routes/auth.route')

require('dotenv').config()
require('./config/passportConfig')(passport)

app.use(express.json())
app.use(passport.initialize())

const port = process.env.PORT || 3000

app.get(
    '/protected',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        console.log('fuckkkkkkkkkk')
        res.status(200).status({ message: 'hello' })
    }
)

// app.get(
//     '/dashboard',
//     passport.authenticate('jwt', { session: false }),
//     (req, res, next) => {
//         next()
//     }
// )

app.get(
    'api/users/dashboard',
    passport.authenticate('jwt', {
        session: false
    }),
    (req, res) => {
        // res.redirect('/dashboard')
        res.status(200).json({ message: 'success' })
    }
)

// app.get('/dashboard', {

// })

// app.get(
//     '/api/users/dashboard',
//     // passport.authenticate('jwt', { session: false }),
//     (req, res) => {
//         // res.redirect('dashboard')
//         // res.status(200).json({ message: 'success' })
//         res.redirect('dashboard')
//     }
// )

app.use(
    express.static(path.join(__dirname, 'views'), {
        index: false,
        extensions: ['html']
    })
)

app.get('/', (req, res) => {
    res.redirect('login')
})

app.use('/api/auth', auth)

const start = async () => {
    try {
        app.listen(port, () => console.log(`Listening on port ${port}`))
    } catch (err) {
        console.error(err)
    }
}

start()
