const mysql = require('mysql2')

require('dotenv').config()

// Create a connection to the database
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'eventwebsite'
})

// open the MySQL connection
// connection.connect((error) => {
//     if (error) throw error
//     console.log('Successfully connected to the database.')
// })

module.exports = pool.promise()
