const {

    gerUserModel,
    postUserModel,

} = require('../db/dbUser')


const getUserService = async (req, res) => {

    var user_get = await gerUserModel()

    return user_get

}

const postUserService = async (
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
) => {

    var data = {
        nama_depan: nama_depan,
        nama_belakang: nama_belakang,
        jenis_kelamin: jenis_kelamin,
        tanggal_lahir: tanggal_lahir,
        email: email,
        password: password,
        aktifasi: aktifasi,
        alamat: alamat,
        no_tlp: no_tlp,
        phone: phone,
        id_provinsi: id_provinsi,
        id_kota: id_kota,
    }

    var user_post = await postUserModel(nama_depan,
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
    return user_post;
}

module.exports = {

    getUserService,
    postUserService,
}