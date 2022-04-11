const express = require('express')
const router = express.Router()
const {
    createPublicEvent,
    createPrivateEvent,
    createRSOEvent,
    getPublicEvents,
    getPrivateEvents,
    getRSOEvents,
    deleteEvents
} = require('../controllers/events.controller')

router.route('/createPublicEvent').post(createPublicEvent)
router.route('/createPrivateEvent').post(createPrivateEvent)
router.route('/createRSOEvent').post(createRSOEvent)

router.route('/getPublicEvents').get(getPublicEvents)
router.route('/getPrivateEvents').get(getPrivateEvents)
router.route('/getRSOEvents').get(getRSOEvents)

router.route('/deleteEvents').delete(deleteEvents)

module.exports = router
