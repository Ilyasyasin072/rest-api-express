const {
    getCustomer,
    postCustomer,
    updateCustomer,
    showCustomer,
    destroyCustomer

} = require('../db/dbCustomer');

const getCustomerService = async (req, res, next) => {

    const customer_get_service = await getCustomer();

    return customer_get_service
}

const postCustomerService = async (name, phone_number, address, point, deposit) => {

    var customer_post = await postCustomer(name, phone_number, address, point, deposit);

    return customer_post;
}

const updateCustomerService = async (name, phone_number, address, point, deposit, id) => {

    var customer_post = await updateCustomer(name, phone_number, address, point, deposit, id);

    return customer_post;
}

const showCustomerService = async (id) => {

    var customer_show = await showCustomer(id)

    return customer_show
}

const destroyCustomerService = async (id) => {

    var customer_destroy = await destroyCustomer(id)

    return customer_destroy
}

module.exports = {
    getCustomerService,
    postCustomerService,
    updateCustomerService,
    showCustomerService,
    destroyCustomerService
}