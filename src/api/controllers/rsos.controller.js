const RSO = require('../models/rsos.model')

exports.createRSO = async (req, res) => {
    try {
        if (!req.body) {
            res.status(400).send({
                message: 'Content can not be empty!'
            })
        }

        const { name, description } = req.body

        const newRSO = new RSO({
            name: name,
            description: description
        })

        await RSO.createRSO(newRSO)
        res.status(201).json({
            status: 'Success',
            message: 'Created a new RSO'
        })
    } catch (err) {
        res.status(500).json({
            status: 'Error',
            message: 'Could not create event',
            error: err
        })
    }
}
