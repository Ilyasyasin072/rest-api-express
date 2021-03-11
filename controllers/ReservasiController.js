const {
    indexReservasiService
} = require('../services/serviceReservasi');


const index = async (req, res) => {

    try {
        var reservations = await indexReservasiService()

        res.json({
            message: 'GET', 
            data: reservations,
            code: 200
        })

    } catch (error) {
        
        res.json(error.message)
    }
}


module.exports = {
    index,
}