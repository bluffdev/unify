const express = require('express')
const router = express.Router()
const {
    createRSO,
    joinRSO,
    getRSOs,
    getCurrentRSOs,
    leaveRSO
} = require('../controllers/rsos.controller')

router.route('/createRSO').post(createRSO)
router.route('/joinRSO').post(joinRSO)
router.route('/leaveRSO').post(leaveRSO)
router.route('/getRSOs').get(getRSOs)
router.route('/getCurrentRSOs').post(getCurrentRSOs)

module.exports = router
