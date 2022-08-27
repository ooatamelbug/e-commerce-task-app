const joi = require('joi');

// create user schema
const createSchema = joi.object().keys({
    user_id: joi.number().trim().required().min(1),
    count_product: joi.number().trim().required().min(1),
    discount: joi.number().trim().optional().min(0),
    total_price: joi.number().precision(3).trim().required().min(1),
});


// create user schema
const updateSchema = joi.object().keys({
    status: joi.string().trim().min(3).required(),
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

