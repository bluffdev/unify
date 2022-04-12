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

// Creates a new user
// User.registerUser = async (newUser, result) => {
//     database.query('INSERT INTO users SET ?', newUser, (err, res) => {
//         if (err) {
//             console.log('error: ', err)
//             result(err, null)
//             return
//         }
//         console.log('Created User: ', { ...newUser })
//         result(null, { ...newUser })
//     })
// }

User.registerUser = async (newUser) => {
    return database.query('INSERT INTO users SET ?', newUser)
}

User.findByUsername = async (username, result) => {
    return database.query(`SELECT * FROM users WHERE username = '${username}'`)
}

// User.findByUsername = async (username, result) => {
//     database.query(
//         `SELECT * FROM users WHERE username = ${username}`,
//         (err, res) => {
//             if (err) {
//                 console.log('error: ', err)
//                 result(err, null)
//                 return
//             }
//             if (res.length) {
//                 console.log('found username: ', res[0])
//                 result(null, res[0])
//                 return
//             }
//             result({ kind: 'not_found' }, null)
//         }
//     )
// }

module.exports = User
