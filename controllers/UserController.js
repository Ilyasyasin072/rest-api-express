const {

    getUserService,
    postUserService,
    updateUserService,
    showUserService,
    deleteUserService

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

    try {
        
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

    } catch (error) {
        
        res.json(error.message);
    }
}

const update = async (req, res) => {

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

    var users = await updateUserService(
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
        id_kota, req.params.id);

    res.json(users);
}

const show = async (req, res, next) => {

    var getId = parseInt(req.params.id)

    try {

        var users = await showUserService(getId)

        res.json({
            message: 'PUT',
            data: users,
            code: 200,
        })
   
    } catch (error) {

        res.json({
            message: 'Error',
            data: error.message,
            code: 401,
        })
        
    }
}

const destroy = async (req, res, next) => {
    try {
        var users = await deleteUserService(req.params.id);

        res.json({
            message: 'DELETE',
            data: users,
            code: 200,
        })
    } catch (error) {
        
        res.json({
            message: 'Error',
            data: error.message,
            code: 401,
        })
        
    }
}



module.exports = {

    getUser,
    store,
    update,
    show,
    destroy
}