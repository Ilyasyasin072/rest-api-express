const Customer = require('../models/Customer');

const getCustomer = () => {

    return  Customer.query().then(customer => {
        return customer
    })

    return customer;
}

const postCustomer = (name, phone_number, address, point, deposit) => {
    
    var data = {
        name: name,
        phone_number: phone_number,
        address: address,
        point: point,
        deposit: deposit
    }

    return Customer.query().insert(data)
}

module.exports = {
    
    getCustomer,
    postCustomer,
};