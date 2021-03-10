const Customer = require('../models/Customer');

const getCustomer = () => {

    return  Customer.query().then(customer => {
        return customer
    })
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

const updateCustomer = (name, phone_number, address, point, deposit, id) => {
    
    var data = {
        name: name,
        phone_number: phone_number,
        address: address,
        point: point,
        deposit: deposit
    }

    return Customer.query().findById(id).patch(data);
}

const showCustomer = (id) => {
    
    const getId = parseInt(id);

    return Customer.query().findById(id)
}

const destroyCustomer = (id) => {

    const getId = parseInt(id)

    return Customer.query().deleteById(getId);
}

module.exports = {
    
    getCustomer,
    postCustomer,
    updateCustomer,
    showCustomer,
    destroyCustomer
};