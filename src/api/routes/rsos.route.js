const express = require('express')
const router = express.Router()
const {
    createRSO,
    getRSOs,
    getCurrentRSOs
} = require('../controllers/rsos.controller')

router.route('/createRSO').post(createRSO)
router.route('/getRSOs').get(getRSOs)
router.route('/getCurrentRSOs').post(getCurrentRSOs)

module.exports = router
