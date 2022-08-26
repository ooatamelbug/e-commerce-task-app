const joi = require('joi');

// create user schema
const createSchema = joi.object().keys({
    name: joi.string().trim().required().min(3),
    address: joi.string().trim().required().min(3),
    user_id: joi.number().trim().min(1).required(),
});


// create user schema
const updateSchema = joi.object().keys({
    name: joi.optional().string().trim().min(3),
    address: joi.optional().string().trim().min(3),
    user_id: joi.number().trim().min(1).required(),
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

