const database = require('../../config/dbConfig')

const Comment = function (newComment) {
    this.name = newComment.name
    this.id = newComment.id
    this.comment = newComment.comment
    this.rating = newComment.rating
}

Comment.getComments = async (name) => {
    return database.query(`SELECT * FROM comments WHERE name='${name}'`)
}

Comment.createComment = async (newComment) => {
    return database.query('INSERT INTO comments SET ?', newComment)
}

Comment.deleteComment = async (newComment) => {

    return database.query(
        `DELETE FROM comments WHERE comment='${newComment.comment}'`
    )
}

Comment.editComment = async (newComment) => {

    return database.query(
        `UPDATE comments SET comment='${newComment.comment}' WHERE comment='${newComment.name}'`
    )
}


module.exports = Comment