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

PrivateEvents.getPrivateEvents = async (id) => {
    const university = await database.query(
        `SELECT university FROM users WHERE id=${id}`
    )

    const universityID = await database.query(
        `SELECT UniversityID FROM university WHERE name='${university[0][0].university}'`
    )

    return database.query(
        `SELECT * FROM privateevents WHERE UniversityID=${universityID[0][0].UniversityID}`
    )
}

RSOEvents.getRSOEvents = async (id) => {
    const email = await database.query(`SELECT email FROM users WHERE id=${id}`)

    const rsoName = await database.query(
        `SELECT RSOname FROM memberofrso WHERE email='${email[0][0].email}'`
    )

    const rsoId = await database.query(
        `SELECT RSOid FROM rsos WHERE name='${rsoName[0][0].RSOname}'`
    )

    return database.query(
        `SELECT * FROM rsoevents WHERE RSOid=${rsoId[0][0].RSOid}`
    )
}

// Events.deleteEvent = async (id) => {
//     return database.query(`DELETE from events WHERE eventid = ${id}`)
// }

module.exports = { PublicEvents, PrivateEvents, RSOEvents }
