const express = require('express')
const app = express()
const path = require('path')

require('dotenv').config()

app.use(express.json())
app.use(express.static(path.join(__dirname, 'views'), {index:false,extensions:['html']}))

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.redirect('login')
})

app.get('/login', (req, res) => {
    res.redirect('login')
})

const start = () => {
    app.listen(port, () => console.log(`Listening on port ${port}`))
}

start()