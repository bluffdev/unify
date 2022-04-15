const database = require('../../config/dbConfig')

const Comments = function (newComment) {
    this.name = newComment.name
    this.id = newComment.id
    this.comment = newComment.comment
    this.rating = newComment.rating
}

Comments.getPublicEventComments = async (name) => {
    return database.query(`SELECT * FROM publiceventcomments WHERE name=("${name}")'`)
}



module.exports = Comments