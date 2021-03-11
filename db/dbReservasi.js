const Reservasi = require('../models/Reservasi');

const getReservasiDb = () => {

    // return Reservasi.query().then(data => {
    //     return data
    // })

    return Reservasi.query().withGraphFetched({
        user: true,
        kamar: true,
    }).then(data => {
        return data
    })
}


module.exports = {
    getReservasiDb
}