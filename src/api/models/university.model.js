const database = require('../../config/dbConfig')

const University = function (newUniversity) {
    this.name = newUniversity.name
    this.location = newUniversity.location
    this.description = newUniversity.description
    this.numberOfStudents = newUniversity.numberOfStudents
}

University.getUniversityList = async () => {
    return database.query('SELECT * FROM university')
}

module.exports = University