const database = require('../../config/dbConfig')
const mysql = require('mysql2')

const RSO = function (newRSO) {
    this.name = newRSO.name
    this.description = newRSO.description
    this.email1 = newRSO.email1
    this.email2 = newRSO.email2
    this.email3 = newRSO.email3
    this.email4 = newRSO.email4
    this.email5 = newRSO.email5
}

RSO.createRSO = async (newRSO) => {
    let name = newRSO.name
    let desc = newRSO.description

    let email1 = newRSO.email1
    let email2 = newRSO.email2
    let email3 = newRSO.email3
    let email4 = newRSO.email4
    let email5 = newRSO.email5

    database.query(
        `INSERT INTO memberofrso (email, RSOname) VALUES ("${email1}", "${name}")`
    )
    database.query(
        `INSERT INTO memberofrso (email, RSOname) VALUES ("${email2}", "${name}")`
    )
    database.query(
        `INSERT INTO memberofrso (email, RSOname) VALUES ("${email3}", "${name}")`
    )
    database.query(
        `INSERT INTO memberofrso (email, RSOname) VALUES ("${email4}", "${name}")`
    )
    database.query(
        `INSERT INTO memberofrso (email, RSOname) VALUES ("${email5}", "${name}")`
    )

    database.query(
        `INSERT INTO ownsrso (email, RSOname) VALUES ("${email1}", "${name}")`
    )

    return database.query(
        `INSERT INTO rsos (name, description) VALUES ("${name}", "${desc}")`
    )
}

RSO.joinRSO = async (id, name) => {
    const email = await database.query(`SELECT email FROM users WHERE id=${id}`)

    return database.query(
        `INSERT INTO memberofrso (email, RSOname) VALUES('${email[0][0].email}','${name}')`
    )
}

RSO.leaveRSO = async (id, name) => {
    const email = await database.query(`SELECT email FROM users WHERE id=${id}`)

    return database.query(
        `DELETE FROM memberofrso WHERE email='${email[0][0].email}' AND RSOname='${name}'`
    )
}

RSO.getRSOs = async () => {
    return database.query('SELECT * FROM rsos')
}

RSO.getCurrentRSOs = async (id) => {
    const email = await database.query(`SELECT * FROM users WHERE id=${id}`)

    const rsoName = await database.query(
        `SELECT RSOname FROM memberofrso WHERE email='${email[0][0].email}'`
    )

    if (rsoName[0].length === 0) {
        return null
    }

    return database.query(
        `SELECT * FROM rsos WHERE name='${rsoName[0][0].RSOname}'`
    )
}

module.exports = RSO
