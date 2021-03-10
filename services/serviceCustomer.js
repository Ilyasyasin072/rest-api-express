const {
    getCustomer,
    postCustomer,

} = require('../db/dbCustomer');

const getCustomerService = async (req, res, next) => {

    const customer_get_service = await getCustomer();

    return customer_get_service
}

const postCustomerService = async (name, phone_number, address, point, deposit) => {

    var customer_post = await postCustomer(name, phone_number, address, point, deposit);

    return customer_post;
}

module.exports = {
    getCustomerService,
    postCustomerService,
}