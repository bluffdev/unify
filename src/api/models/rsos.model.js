const database = require('../../config/dbConfig')
const mysql = require('mysql2')

const RSO = function (newRSO) {
    this.name = newRSO.name
    this.description = newRSO.description
    this.email1 = newRSO.email1
    this.email2 = newRSO.email2
    this.email3 = newRSO.email3
    this.email4 = newRSO.email4
    this.email5 = newRSO.email5
}

RSO.createRSO = async (newRSO) => {

    let name = newRSO.name
    let desc = newRSO.description

    let email1 = newRSO.email1
    let email2 = newRSO.email2
    let email3 = newRSO.email3
    let email4 = newRSO.email4
    let email5 = newRSO.email5

    database.query("INSERT INTO `memberofrso` (`email`, `RSOname`) VALUES ('"+email1+"','"+name+"')")
    database.query("INSERT INTO `memberofrso` (`email`, `RSOname`) VALUES ('"+email2+"','"+name+"')")
    database.query("INSERT INTO `memberofrso` (`email`, `RSOname`) VALUES ('"+email3+"','"+name+"')")
    database.query("INSERT INTO `memberofrso` (`email`, `RSOname`) VALUES ('"+email4+"','"+name+"')")
    database.query("INSERT INTO `memberofrso` (`email`, `RSOname`) VALUES ('"+email5+"','"+name+"')")

    database.query("INSERT INTO `ownsrso` (`email`, `RSOname`) VALUES ('"+email1+"','"+name+"')")

    return database.query("INSERT INTO `rsos` (`name`, `description`) VALUES ('"+name+"','"+desc+"')")
}

// Events.deleteEvent = async (id) => {
//     return database.query(`DELETE from events WHERE eventid = ${id}`)
// }

// Events.getEvents = async () => {
//     return database.query('SELECT * FROM events')
// }

module.exports = RSO
