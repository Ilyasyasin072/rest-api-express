const {

    gerUserModel,
    postUserModel,
    updateUserModel,
    showUserModel,
    deleteUserModel

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


const updateUserService = async (
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
    id_kota, id,
) => {

    var user_update = await updateUserModel(nama_depan,
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
        id_kota, id);
    return user_update;
}
module.exports = {

    getUserService,
    postUserService,
    updateUserService,
}