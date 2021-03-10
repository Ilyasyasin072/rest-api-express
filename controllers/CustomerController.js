const {
    
    getCustomerService,
    postCustomerService,
    updateCustomerService,
    showCustomerService,
    destroyCustomerService

} = require('../services/serviceCustomer')


const index = async (req, res, next) => {

    try {
        
        var customer =  await getCustomerService();

        res.json(customer);

    } catch (error) {
        
        res.json(customer);

    }
}

const store = async (req, res) => {

    const {name, phone_number, address, point, deposit} = req.body
    
    try {
        var customer = await postCustomerService(name, phone_number, address, point, deposit)
        
        res.json(customer);

    } catch (error) {
        
        res.json(error.message);

    }
}

const update = async (req, res) => {

    const {name, phone_number, address, point, deposit} = req.body
    const getId = parseInt(req.params.id);
    
    try {
        var customer = await updateCustomerService(name, phone_number, address, point, deposit, getId)
        
        res.json(customer);

    } catch (error) {
        
        res.json(error.message);

    }
}

const show = async (req, res, next) => {

    var getId = req.params.id;

    try {
        
        var customer = await showCustomerService(getId);

        res.json(customer);

    } catch (error) {
        
        res.json(error.message);
    }
}


const destroy = async (req, res, next) => {

    var getId = req.params.id

    try {
        
        var customer = await destroyCustomerService(getId)

        res.json(customer)

    } catch (error) {

        res.json(error.message)
        
    }
}

module.exports =  {
    index,
    store,
    update,
    show,
    destroy
}