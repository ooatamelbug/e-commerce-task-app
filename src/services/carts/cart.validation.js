const joi = require('joi');

// create user schema
const createSchema = joi.object().keys({
    user_id: joi.number().required().min(1),
});


// create user schema
const updateSchema = joi.object().keys({
    user_id: joi.number().min(3).optional(),
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

