const User = require('../models/User')

const gerUserModel = () => {

    return User.query().then(user => {
        return user
    })
}

const postUserModel = (
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
    return User.query().insert(data);

}


const updateUserModel = (nama_depan,
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
    id_kota) => {

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

    var getId = parseInt(id);

    return User.query().findById(getId).patch(data);
}

const showUserModel = (id) => {
    var getId = parseInt(id);
    return User.query().findById(getId);
}

const deleteUserModel = (id) => {
    var getId = parseInt(id);

    return User.query().deleteById(getId);
}


module.exports = {
    gerUserModel,
    postUserModel,
    updateUserModel,
    showUserModel,
    deleteUserModel
}