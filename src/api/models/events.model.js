const database = require('../../config/dbConfig')

const Events = function (newEvent) {
    this.name = newEvent.name
    this.location = newEvent.location
    this.description = newEvent.description
    this.year = newEvent.year
    this.month = newEvent.month
    this.day = newEvent.day
    this.time = newEvent.time
}

Events.createPublicEvent = async (newEvent) => {
    return database.query('INSERT INTO publicevents SET ?', newEvent)
}

Events.createRSOEvent = async (newEvent) => {
    return database.query('INSERT INTO rsoevents SET ?', newEvent)
}

Events.createPrivateEvent = async (newEvent) => {
    return database.query('INSERT INTO rsoevents SET ?', newEvent)
}

Events.getPublicEvents = async () => {
    return database.query('SELECT * FROM publicevents')
}

Events.getPrivateEvents = async () => {
    return database.query('SELECT * FROM privateevents')
}

Events.getRSOEvents = async () => {
    return database.query('SELECT * FROM rsoevents')
}

Events.deleteEvent = async (id) => {
    return database.query(`DELETE from events WHERE eventid = ${id}`)
}




module.exports = Events
