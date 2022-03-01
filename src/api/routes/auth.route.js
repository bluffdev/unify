const express = require('express')
const router = express.Router()
const { register, login } = require('../controllers/auth.controller')

// Both of these need to be changed to POST requests
router.route('/register').get(register)

router.route('/login').get(login)

module.exports = router
