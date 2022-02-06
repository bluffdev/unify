const express = require('express')
const app = express()
const path = require('path')

const auth = require('./api/routes/auth.route')

require('dotenv').config()

app.use(express.json())
app.use(
    express.static(path.join(__dirname, 'views'), {
        index: false,
        extensions: ['html']
    })
)

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.redirect('login')
})

app.use('/api/auth', auth)

const start = () => {
    app.listen(port, () => console.log(`Listening on port ${port}`))
}

start()
