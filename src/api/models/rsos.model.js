const database = require('../../config/dbConfig')

const RSO = function (newRSO) {
    this.name = newRSO.name
    this.description = newRSO.description
}

RSO.createRSO = async (newRSO) => {
    return database.query('INSERT INTO rsos SET ?', newRSO)
}

// Events.deleteEvent = async (id) => {
//     return database.query(`DELETE from events WHERE eventid = ${id}`)
// }

// Events.getEvents = async () => {
//     return database.query('SELECT * FROM events')
// }

module.exports = RSO
