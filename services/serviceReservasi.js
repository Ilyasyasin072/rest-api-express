const {

    getReservasiDb

} = require('../db/dbReservasi')


const indexReservasiService = async () => {
    
    var reservation = await getReservasiDb()

    return reservation
}


module.exports = {
    indexReservasiService
}