const {
    
    getFleet,
    getFleetId

} = require('../db/dbFleet')

const getFleetService = async () => {
    
    var fleet = await getFleet()

    return fleet
}

const getFleetIdService = async (id) => {

    var fleet = await getFleetId(id)

    return fleet
}


module.exports = {
    getFleetService,
    getFleetIdService
}