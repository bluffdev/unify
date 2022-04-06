const express = require('express')
const router = express.Router()
const { createRSO } = require('../controllers/rsos.controller')

router.route('/createRSO').post(createRSO)
// router.route('/deleteEvent').delete(deleteEvents)
// router.route('/getEvents').get(getEvents)

module.exports = router
