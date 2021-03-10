const {
    
    gerUserModel,
    getUserId

} = require('../db/dbUser')


const getUserService = async (req, res) => {

    var user_get = await gerUserModel()

    return user_get

}

const getUserIdService = async (id) => {

    var user_id = await getUserId(id)

    return user_id

}

module.exports = {
    
    getUserService,
    getUserIdService,

}