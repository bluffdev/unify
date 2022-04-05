const express = require('express')
const router = express.Router()
const {
    createEvent,
    getEvents,
    deleteEvents
} = require('../controllers/events.controller')

router.route('/createEvent').post(createEvent)
router.route('/deleteEvent').delete(deleteEvents)
router.route('/getEvents').get(getEvents)

module.exports = router
