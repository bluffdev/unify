const Comment = require('../models/comments.model')

exports.getPublicEventComments = async (req, res) => {
    try {
        const comments = await Comment.getPublicEventComments()

        res.status(201).json({
            status: 'Success',
            message: 'Recived all Public Event Comments',
            comments: comments[0]
        })
    } catch (err) {
        res.status(500).json({
            status: 'Error',
            message: 'Could not get RSOs',
            error: err
        })
    }
}