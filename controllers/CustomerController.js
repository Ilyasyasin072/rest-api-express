const {
    getCustomerService
} = require('../services/serviceCustomer')


const index = async (req, res, next) => {

    try {
        
        var customer =  await getCustomerService();

        res.json(customer);

    } catch (error) {
        
        res.json(customer);

    }
}


module.exports =  {
    index,
}