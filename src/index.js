const express = require('express')
const app = express()
const path = require('path')

const auth = require('./api/routes/auth.route')

require('dotenv').config()

app.use(express.json())

const port = process.env.PORT || 3000

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
