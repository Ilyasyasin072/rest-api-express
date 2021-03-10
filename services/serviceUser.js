const {
    
    gerUserModel,

} = require('../db/dbUser')


const getUserService = async (req, res) => {

    var user_get = await gerUserModel()

    return user_get

}

module.exports = {
    
    getUserService,

}