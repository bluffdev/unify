const database = require('../../config/dbConfig')

const Comments = function (newComment) {
    this.pubeventid = newComment.pubeventid
    this.id = newComment.id
    this.comment = newComment.comment
    this.rating = newComment.rating
}

Comments.getPublicEventComments = async () => {
    let publicEvent = newComment.pubeventid

    // return database.query(`SELECT * FROM publiceventcomments WHERE pubeventid=("${publicEvent}")'`)
    return database.query(`SELECT * FROM publiceventcomments`)
}

module.exports = Comments