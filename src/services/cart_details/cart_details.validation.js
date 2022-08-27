const joi = require('joi');

// create user schema
const createSchema = joi.object().keys({
    product_id: joi.number().trim().required().min(1),
    cart_id: joi.number().trim().required().min(1),
    quantity: joi.number().trim().min(1).required(),
    price_of_one: joi.number().less(1.5).precision(3).min(1).trim().required()
});


// create user schema
const updateSchema = joi.object().keys({
    product_id: joi.number().trim().min(3).optional(),
    cart_id: joi.number().trim().min(3).optional(),
    quantity: joi.number().trim().min(8).optional(),
    price_of_one: joi.number().precision(3).min(1).trim().optional()
});

const idSchema = joi.object().keys({
    id: joi.number().trim().required(),
});

const options = { convert: true, abortEarly: false }; 

module.exports = {
    createSchema,
    options,
    updateSchema,
    idSchema
};

