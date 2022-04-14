const express = require('express')
const router = express.Router()
const { getPublicEventComments } = require('../controllers/comments.controller')

router.route('/getPublicEventComments').get(getPublicEventComments)

module.exports = router
