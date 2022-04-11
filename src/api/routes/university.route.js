const express = require('express')
const router = express.Router()
const { getUniversityList } = require('../controllers/university.controller')

router.route('/getUniversityList').get(getUniversityList)

module.exports = router
