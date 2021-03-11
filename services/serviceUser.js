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

const showUserService = async (id) => {
    
    var user_show = await showUserModel(id);

    return user_show;
}

const deleteUserService = async (id) => {

    var user_delete = await deleteUserModel(id);

    return user_delete;
}
module.exports = {

    getUserService,
    postUserService,
    updateUserService,
    showUserService,
    deleteUserService
}