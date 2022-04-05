const User = require('../models/users.model')
const bcrypt = require('bcryptjs')

exports.register = async (req, res) => {
    try {
        if (!req.body) {
            res.status(400).send({
                message: 'Content can not be empty!'
            })
        }

        const { username, password, email } = req.body

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // Create a user
        const user = new User({
            username: username,
            password: hashedPassword,
            email: email
        })

        await User.registerUser(user)
        res.status(201).json({
            status: 'Success',
            message: 'Registered new user'
        })
    } catch (err) {
        res.status(500).json({
            status: 'Error',
            message: 'Could not register user',
            error: err
        })
    }
}

exports.login = async (req, res) => {
    try {
        if (!req.body) {
            res.status(400).json({ message: 'Content can not be empty' })
        }

        if (!req.body.username || !req.body.password) {
            return res.status(500).json({
                message: 'Request body must have a username and password'
            })
        }

        const { username, password } = req.body

        const userQueryData = await User.findByUsername(username)

        if (userQueryData[0].length != 1) {
            return res.status(404).json({ message: 'User not found' })
        }

        const user = userQueryData[0][0]

        const isCorrectPassword = await bcrypt.compare(password, user.password)

        if (isCorrectPassword) {
            res.status(200).json({
                status: true,
                message: 'Logged in',
                id: user.id
            })
        } else {
            res.status(404).json({
                status: false,
                message: 'Password is incorrect'
            })
        }
    } catch (err) {
        res.status(500).json({ err })
    }
}
