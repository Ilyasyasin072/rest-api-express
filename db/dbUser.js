const User = require('../models/User')

const gerUserModel = () => {

    return User.query().then(user => {
        return user
    })
}


module.exports = {
    gerUserModel,
}