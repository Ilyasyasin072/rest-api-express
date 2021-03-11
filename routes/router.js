const express = require('express');
require('express-group-routes');

const categoryController = require('../controllers/CategoryController');
const customerController = require('../controllers/CustomerController');
const userController = require('../controllers/UserController');
const fletController = require('../controllers/FleetController');
const reservasiController = require('../controllers/ReservasiController');

const router = express.Router();

router.group('/v1', (router) => {

    // Tamu
    router.group('/user', (router) => {
        router.get('/data', userController.getUser);
        router.post('/store', userController.store);
        router.put('/update/:id', userController.update);
        router.get('/show/:id', userController.show);
        router.delete('/delete/:id', userController.destroy);
        
    })

    // Revarasi
    router.group('/reservasi', (router) => {
        router.get('/data', reservasiController.index);
    })

    // Pembayaran

    router.group('/pembayaran', (router) => {
        router.get('/data', async(req, res) => {
            res.json({
                message: 'GET',
                data : 'Pembayaran Data',
                code: 200
            })
        })

        router.get('/store', async(req, res) => {
            res.json({
                message: 'POST',
                data : 'Pembayaran Data',
                code: 200
            })
        })

        router.get('/update/:id', async(req, res) => {
            res.json({
                message: 'PUT',
                data : 'Pembayaran with params ' + req.params.id,
                code: 200
            })
        })

        router.get('/delete/:id', async(req, res) => {
            res.json({
                message: 'DELETE',
                data : 'Pembayaran With params' + req.params.id,
                code: 200
            })
        })
    })

    // Checkin

    router.group('/check', (router) => {
        router.get('/data', async(req, res) => {
            res.json({
                message: 'GET',
                data : 'Pembayaran Data',
                code: 200
            })
        })

        router.get('/store', async(req, res) => {
            res.json({
                message: 'POST',
                data : 'Pembayaran Data',
                code: 200
            })
        })

        router.get('/update/:id', async(req, res) => {
            res.json({
                message: 'PUT',
                data : 'Pembayaran with params ' + req.params.id,
                code: 200
            })
        })

        router.get('/delete/:id', async(req, res) => {
            res.json({
                message: 'DELETE',
                data : 'Pembayaran With params' + req.params.id,
                code: 200
            })
        })
    })

    // Kota

    router.group('/kota', (router) => {
        router.get('/data', async(req, res) => {
            res.json({
                message: 'GET',
                data : 'Pembayaran Data',
                code: 200
            })
        })

        router.get('/store', async(req, res) => {
            res.json({
                message: 'POST',
                data : 'Pembayaran Data',
                code: 200
            })
        })

        router.get('/update/:id', async(req, res) => {
            res.json({
                message: 'PUT',
                data : 'Pembayaran with params ' + req.params.id,
                code: 200
            })
        })

        router.get('/delete/:id', async(req, res) => {
            res.json({
                message: 'DELETE',
                data : 'Pembayaran With params' + req.params.id,
                code: 200
            })
        })
    })

    // Provinsi

    router.group('/provinsi', (router) => {
        router.get('/data', async(req, res) => {
            res.json({
                message: 'GET',
                data : 'Pembayaran Data',
                code: 200
            })
        })

        router.get('/store', async(req, res) => {
            res.json({
                message: 'POST',
                data : 'Pembayaran Data',
                code: 200
            })
        })

        router.get('/update/:id', async(req, res) => {
            res.json({
                message: 'PUT',
                data : 'Pembayaran with params ' + req.params.id,
                code: 200
            })
        })

        router.get('/delete/:id', async(req, res) => {
            res.json({
                message: 'DELETE',
                data : 'Pembayaran With params' + req.params.id,
                code: 200
            })
        })
    })

    // Pegawai

    router.group('/pegawai', (router) => {
        router.get('/data', async(req, res) => {
            res.json({
                message: 'GET',
                data : 'Pembayaran Data',
                code: 200
            })
        })

        router.get('/store', async(req, res) => {
            res.json({
                message: 'POST',
                data : 'Pembayaran Data',
                code: 200
            })
        })

        router.get('/update/:id', async(req, res) => {
            res.json({
                message: 'PUT',
                data : 'Pembayaran with params ' + req.params.id,
                code: 200
            })
        })

        router.get('/delete/:id', async(req, res) => {
            res.json({
                message: 'DELETE',
                data : 'Pembayaran With params' + req.params.id,
                code: 200
            })
        })
    })

    // Kamar

    router.group('/kamar', (router) => {
        router.get('/data', async(req, res) => {
            res.json({
                message: 'GET',
                data : 'Pembayaran Data',
                code: 200
            })
        })

        router.get('/store', async(req, res) => {
            res.json({
                message: 'POST',
                data : 'Pembayaran Data',
                code: 200
            })
        })

        router.get('/update/:id', async(req, res) => {
            res.json({
                message: 'PUT',
                data : 'Pembayaran with params ' + req.params.id,
                code: 200
            })
        })

        router.get('/delete/:id', async(req, res) => {
            res.json({
                message: 'DELETE',
                data : 'Pembayaran With params' + req.params.id,
                code: 200
            })
        })
    })
    
    router.group('/category', (router) => {
        router.get('/data', categoryController.getCategory);
        router.get('/show/:id', categoryController.getCategoryId);
        router.post('/store', categoryController.postCategory);
        router.put('/update/:id', categoryController.updateCategory);
        router.delete('/delete/:id', categoryController.destroyCategoryId);
        router.get('/deleted/all', categoryController.softDeleteGet);
    })

    router.group('/customer', (router) => {
        router.get('/data', customerController.index)
        router.post('/store', customerController.store)
        router.put('/update/:id', customerController.update)
        router.get('/show/:id', customerController.show)
        router.delete('/delete/:id', customerController.destroy)
    })

    router.group('/fleet', (router) => {
        router.get('/data', fletController.index);
        router.get('/show/:id', fletController.show);
    })

})

module.exports = router