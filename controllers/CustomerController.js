const {
    
    getCustomerService,
    postCustomerService,

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


module.exports =  {
    index,
    store,
}