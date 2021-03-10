const {
    getFleetService,
    getFleetIdService

} = require('../services/serviceFleet')

const index = async (req, res) => {

    var fleet = await getFleetService()

    res.json(fleet)
}

const show = async(req, res, next) => {

    var getId = req.params.id

    var fleet = await getFleetIdService(getId)

    res.json(fleet)
}

module.exports = {
    index,
    show,
}