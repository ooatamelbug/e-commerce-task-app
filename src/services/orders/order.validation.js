const joi = require('joi');

// create user schema
const createSchema = joi.object().keys({
    user_id: joi.number().required().min(1),
    count_product: joi.number().required().min(1),
    discount: joi.number().optional().min(0),
    total_price: joi.number().precision(3).required().min(1),
});


// create user schema
const updateSchema = joi.object().keys({
    status: joi.string().trim().min(3).required(),
});

const idSchema = joi.object().keys({
    id: joi.number().required(),
});

const options = { convert: true, abortEarly: false }; 

module.exports = {
    createSchema,
    options,
    updateSchema,
    idSchema
};

