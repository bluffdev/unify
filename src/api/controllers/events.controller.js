const {
    PublicEvents,
    PrivateEvents,
    RSOEvents
} = require('../models/events.model')

exports.createPublicEvent = async (req, res) => {
    try {
        if (!req.body) {
            res.status(400).send({
                message: 'Content can not be empty!'
            })
        }

        const { name, location, description, year, month, day, time } = req.body

        const newEvent = new PublicEvents({
            name: name,
            location: location,
            description: description,
            year: year,
            month: month,
            day: day,
            time: time
        })

        await PublicEvents.createPublicEvent(newEvent)
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

exports.createPrivateEvent = async (req, res) => {
    try {
        if (!req.body) {
            res.status(400).send({
                message: 'Content can not be empty!'
            })
        }

        const {
            UniversityID,
            name,
            location,
            description,
            year,
            month,
            day,
            time
        } = req.body

        const newEvent = new PrivateEvents({
            UniversityID: UniversityID,
            name: name,
            location: location,
            description: description,
            year: year,
            month: month,
            day: day,
            time: time
        })

        await PrivateEvents.createPrivateEvent(newEvent)
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

exports.createRSOEvent = async (req, res) => {
    try {
        if (!req.body) {
            res.status(400).send({
                message: 'Content can not be empty!'
            })
        }

        const { RSOid, name, location, description, year, month, day, time } =
            req.body

        const newEvent = new RSOEvents({
            RSOid: RSOid,
            name: name,
            location: location,
            description: description,
            year: year,
            month: month,
            day: day,
            time: time
        })

        await RSOEvents.createRSOEvent(newEvent)
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

exports.getPublicEvents = async (req, res) => {
    try {
        const events = await PublicEvents.getPublicEvents()
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

exports.getPrivateEvents = async (req, res) => {
    try {
        const events = await PrivateEvents.getPrivateEvents(req.body.id)
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

exports.getRSOEvents = async (req, res) => {
    try {
        const events = await RSOEvents.getRSOEvents(req.body.id)
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
