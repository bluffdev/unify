const express = require('express')
const router = express.Router()
const { createRSO, getRSOs } = require('../controllers/rsos.controller')

router.route('/createRSO').post(createRSO)
router.route('/getRSOs').get(getRSOs)

module.exports = router
