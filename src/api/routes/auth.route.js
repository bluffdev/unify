const express = require('express')
const router = express.Router()
const { registerUser } = require('../controllers/auth.controller')

// Both of these need to be changed to POST requests
router.route('/register').post(registerUser)

// router.route('/login').get(login)

module.exports = router
