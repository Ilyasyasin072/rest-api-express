const Customer = require('../models/Customer');

const getCustomer = () => {
    
    return  Customer.query().then(customer => {
        return customer
    })

    return customer;
}

module.exports = {
    getCustomer,
};