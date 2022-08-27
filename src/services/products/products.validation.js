const joi = require('joi');

// create user schema
const createSchema = joi.object().keys({
    name: joi.string().trim().required().min(3),
    description: joi.string().trim().required().min(3),
    quantity: joi.number().trim().min(1).required(),
    price: joi.number().precision(3).trim().required(),
    status: joi.string().trim().required(),
    image_url: joi.string().trim().optional(),
    store_id: joi.number().min(1).trim().required()
});


// create user schema
const updateSchema = joi.object().keys({
    name: joi.optional().string().trim().min(3),
    description: joi.optional().string().trim().min(3),
    quantity: joi.optional().number().trim().min(8),
    price: joi.number().precision(3).trim().optional(),
    status: joi.string().trim().optional(),
    image_url: joi.string().trim().optional(),
    store_id: joi.number().min(1).trim().optional()
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

