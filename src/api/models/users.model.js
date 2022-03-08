// User model code with go here :)

// for connecting to mySql database
const database = require('../../config/dbConfig')

// constructor for user
const User = function (user) {
    this.username = user.username
    this.password = user.password
    this.email = user.email
}

// Creates a new user
User.createUser = (newUser, result) => {
    database.query('INSERT INTO users SET ?', newUser, (err, res) => {
        if (err) {
            console.log('error: ', err)
            result(err, null)
            return
        }
        console.log('Created User: ', { ...newUser })
        result(null, { ...newUser })
    })
}

module.exports = User
