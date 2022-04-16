// User model code with go here :)

// for connecting to mySql database
const database = require('../../config/dbConfig')

// constructor for user
const User = function (user) {
    this.username = user.username
    this.password = user.password
    this.email = user.email
    this.university = user.university
}

User.registerUser = async (newUser) => {
    const users = await database.query(
        `SELECT * FROM users WHERE username='${newUser.username}' OR email='${newUser.email}'`
    )

    if (users[0].length > 0) {
        return null
    }

    return database.query('INSERT INTO users SET ?', newUser)
}

User.findByUsername = async (username, result) => {
    return database.query(`SELECT * FROM users WHERE username = '${username}'`)
}

User.checkIfAdmin = async (username) => {
    return database.query(`SELECT * FROM admin WHERE username = '${username}'`)
}

User.getUniversityID = async (name) => {
    return database.query(
        `SELECT UniversityID FROM university where name='${name}'`
    )
}

module.exports = User
