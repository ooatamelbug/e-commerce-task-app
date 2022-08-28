const joi = require("joi");

// create CartDetails schema
const createSchema = joi.object().keys({
  product_id: joi.number().required().min(1),
  cart_id: joi.number().required().min(1),
  quantity: joi.number().min(1).required(),
  price_of_one: joi.number().precision(3).min(1).required(),
});

// create CartDetails schema
const updateSchema = joi.object().keys({
  product_id: joi.number().min(3).optional(),
  cart_id: joi.number().min(3).optional(),
  quantity: joi.number().min(8).optional(),
  price_of_one: joi.number().precision(3).min(1).optional(),
});

const idSchema = joi.object().keys({
  id: joi.number().required(),
});

const options = { convert: true, abortEarly: false };

module.exports = {
  createSchema,
  options,
  updateSchema,
  idSchema,
};
