const database = require('../../config/dbConfig')

const PublicEvents = function (newEvent) {
    this.name = newEvent.name
    this.location = newEvent.location
    this.description = newEvent.description
    this.year = newEvent.year
    this.month = newEvent.month
    this.day = newEvent.day
    this.time = newEvent.time
}

const PrivateEvents = function (newEvent) {
    this.UniversityID = newEvent.UniversityID
    this.name = newEvent.name
    this.location = newEvent.location
    this.description = newEvent.description
    this.year = newEvent.year
    this.month = newEvent.month
    this.day = newEvent.day
    this.time = newEvent.time
}

const RSOEvents = function (newEvent) {
    this.RSOid = newEvent.RSOid
    this.name = newEvent.name
    this.location = newEvent.location
    this.description = newEvent.description
    this.year = newEvent.year
    this.month = newEvent.month
    this.day = newEvent.day
    this.time = newEvent.time
}

PublicEvents.createPublicEvent = async (newEvent) => {
    return database.query('INSERT INTO publicevents SET ?', newEvent)
}

RSOEvents.createRSOEvent = async (newEvent) => {
    return database.query('INSERT INTO rsoevents SET ?', newEvent)
}

PrivateEvents.createPrivateEvent = async (newEvent) => {
    return database.query('INSERT INTO privateevents SET ?', newEvent)
}

PublicEvents.getPublicEvents = async () => {
    return database.query('SELECT * FROM publicevents')
}

PrivateEvents.getPrivateEvents = async () => {
    return database.query('SELECT * FROM privateevents')
}

RSOEvents.getRSOEvents = async () => {
    return database.query('SELECT * FROM rsoevents')
}

// Events.deleteEvent = async (id) => {
//     return database.query(`DELETE from events WHERE eventid = ${id}`)
// }

module.exports = { PublicEvents, PrivateEvents, RSOEvents }
