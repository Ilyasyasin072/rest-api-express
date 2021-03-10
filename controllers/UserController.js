const {
    getUserService
} = require('../services/serviceUser')


const getUser = async (req, res) => {
    
    var users = await getUserService()

    res.json(users)
}


module.exports = {
    
    getUser,

}