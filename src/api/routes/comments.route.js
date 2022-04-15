const express = require('express')
const router = express.Router()
const { getComments, createComment, deleteComment, editComment } = require('../controllers/comments.controller')

router.route('/getComments').post(getComments)

router.route('/createComment').post(createComment)

router.route('/deleteComment').post(deleteComment)

router.route('/editComment').post(editComment)

module.exports = router
