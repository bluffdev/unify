const register = (req, res) => {
    res.send('You have logged in :)')
}

const login = (req, res) => {
    res.send('You have registered :)')
}

module.exports = { register, login }
