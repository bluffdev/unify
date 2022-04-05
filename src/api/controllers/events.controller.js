const Events = require('../models/events.model')

exports.createEvent = async (req, res) => {
    try {
        if (!req.body) {
            res.status(400).send({
                message: 'Content can not be empty!'
            })
        }

        const { name, location, description, date } = req.body

        const newEvent = new Events({
            name: name,
            location: location,
            description: description,
            date: date
        })

        await Events.createEvent(newEvent)
        res.status(201).json({
            status: 'Success',
            message: 'Created new event'
        })
    } catch (err) {
        res.status(500).json({
            status: 'Error',
            message: 'Could not create event',
            error: err
        })
    }
}

exports.deleteEvents = async (req, res) => {
    try {
        if (!req.body) {
            res.status(400).send({
                message: 'Content can not be empty!'
            })
        }

        Events.deleteEvent(req.body.id)
        res.status(200).json({
            status: 'Success',
            message: 'Deleted event'
        })
    } catch (err) {
        res.status(500).json({
            status: 'Error',
            message: 'Could not delete event'
        })
    }
}

exports.getEvents = async (req, res) => {
    try {
        const events = await Events.getEvents()
        res.status(200).json({
            status: 'Success',
            message: 'Grabbed all events',
            events: events[0]
        })
    } catch (err) {
        res.status(500).json({
            status: 'Error',
            message: 'Could not get events',
            error: err
        })
    }
}
