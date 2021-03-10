const {
    getCustomer

} = require('../db/dbCustomer');

const getCustomerService = async (req, res, next) => {

    const customer_get_service = await getCustomer();

    return customer_get_service
}

module.exports = {
    getCustomerService
}