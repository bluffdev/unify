const express = require('express')
const router = express.Router()
const { register, login } = require('../controllers/auth.controller')

// Both of these need to be changed to POST requests
router.route('/register').post(register)
router.route('/login').post(login)

module.exports = router
