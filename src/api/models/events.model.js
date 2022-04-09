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

Events.createEvent = async (newEvent) => {
    return database.query('INSERT INTO events SET ?', newEvent)
}

Events.deleteEvent = async (id) => {
    return database.query(`DELETE from events WHERE eventid = ${id}`)
}

Events.getEvents = async () => {
    return database.query('SELECT * FROM events')
}

module.exports = Events
