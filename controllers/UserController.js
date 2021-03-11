const {

    getUserService,
    postUserService

} = require('../services/serviceUser')


const getUser = async (req, res) => {

    var users = await getUserService()

    res.json(users)
}

const store = async (req, res) => {

    const {
        nama_depan,
        nama_belakang,
        jenis_kelamin,
        tanggal_lahir,
        email,
        password,
        aktifasi,
        alamat,
        no_tlp,
        phone,
        id_provinsi,
        id_kota
    } = req.body;

    //    console.log(nama_depan, 
    //     nama_belakang, 
    //     jenis_kelamin, 
    //     tanggal_lahir, 
    //     email, 
    //     password, 
    //     aktifasi, 
    //     alamat,
    //     no_tlp, 
    //     phone,
    //     id_provinsi,
    //     id_kota);

    var users = await postUserService(
        nama_depan,
        nama_belakang,
        jenis_kelamin,
        tanggal_lahir,
        email,
        password,
        aktifasi,
        alamat,
        no_tlp,
        phone,
        id_provinsi,
        id_kota);

    res.json(users);
}

module.exports = {

    getUser,
    store,

}