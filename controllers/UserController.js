const {

    getUserService,
    getUserIdService

} = require('../services/serviceUser')


const getUser = async (req, res) => {
    
    var users = await getUserService()

    res.json(users)
}

const getUserId = async (req, res) => {
    
    var getId = req.params.id
    
    var users = await getUserIdService(getId)

    res.json(users)
}


module.exports = {
    
    getUser,
    getUserId,

}