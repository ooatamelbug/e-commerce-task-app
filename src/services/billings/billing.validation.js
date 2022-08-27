const joi = require('joi');

// create user schema
const createSchema = joi.object().keys({
    user_id: joi.number().trim().required().min(1),
    order_id: joi.number().trim().required().min(1),
    total_amount: joi.number().precision(3).min(1).trim().required(),
    type_paid: joi.string().trim().valid("Visa","Master", "Credit", "Debit").required(),
    card_date: joi.string().trim().custom((value, helper) => {
        const year = value.split("/")
        if( new Date().getFullYear() == `20${year[0]}` ) {
            if (new Date().getMonth() + 1 > Number(year[1])) {
                return helper.message("invalid vard");
            }
            return true
        }
        return true;
    })
});


const idSchema = joi.object().keys({
    id: joi.number().trim().required(),
});

const options = { convert: true, abortEarly: false }; 

module.exports = {
    createSchema,
    options,
    idSchema
};

