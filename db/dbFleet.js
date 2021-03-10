const Fleet = require('../models/Fleet')

const getFleet = () => {

    return Fleet.query().then(fleet => {
        return fleet
    })
}

const getFleetId = (id) => {

    return Fleet.query().where('id', id).withGraphFetched('user')
    .then(fleet => {
        return fleet
    })
}


module.exports = {
    getFleet,
    getFleetId,
}