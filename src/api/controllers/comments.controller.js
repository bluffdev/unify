const Comment = require('../models/comments.model')

exports.getComments = async (req, res) => {
    try {
        const comments = await Comment.getComments(req.body.name)

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

exports.createComment = async (req, res) => {
    try {
        if (!req.body) {
            res.status(400).send({
                message: 'Content can not be empty!'
            })
        }

        const {
            name,
            id,
            comment,
            rating
        } = req.body

        const newComment = new Comment({
            name: name,
            id: id,
            comment: comment,
            rating: rating
        })

        await Comment.createComment(newComment)

        res.status(201).json({
            status: 'Success',
            message: 'Created comment'
        })
    } catch (err) {
        res.status(500).json({
            status: 'Error',
            message: 'Could not create event',
            error: err
        })
    }
}