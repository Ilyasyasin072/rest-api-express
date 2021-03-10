const User = require('../models/User')

const gerUserModel = () => {

    return User.query().then(user => {
        return user
    })
}


const getUserId = (id) => {

    return User.query().withGraphJoined('fleets').where('id', id)
    .then(user => {
        return user
    })
}

module.exports = {
    gerUserModel,
    getUserId,
}