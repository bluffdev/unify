const express = require('express')
const router = express.Router()
const { getComments, createComment } = require('../controllers/comments.controller')

router.route('/getComments').post(getComments)

router.route('/createComment').post(createComment)

module.exports = router
