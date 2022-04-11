const University = require('../models/university.model')

exports.getUniversityList = async (req, res) => {
    try {
        const universities = await University.getUniversityList()

        res.status(200).json({
            status: 'Success',
            message: 'Grabbed all Unis',
            universities: universities[0]
        })
    } catch (err) {
        res.status(500).json({
            status: 'Error',
            message: 'Could not get Unis',
            error: err
        })
    }
}
