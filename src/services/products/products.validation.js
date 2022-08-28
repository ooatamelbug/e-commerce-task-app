const joi = require("joi");

// create Products schema
const createSchema = joi.object().keys({
  name: joi.string().trim().required().min(3),
  description: joi.string().trim().required().min(3),
  quantity: joi.number().min(1).required(),
  price: joi.number().precision(3).required(),
  status: joi.string().trim().required(),
  image_url: joi.string().trim().optional(),
  store_id: joi.number().min(1).required(),
});

// create Products schema
const updateSchema = joi.object().keys({
  name: joi.string().trim().min(3),
  description: joi.string().trim().min(3),
  quantity: joi.number().min(0),
  price: joi.number().precision(3).optional(),
  status: joi.string().trim().optional(),
  image_url: joi.string().trim(),
  store_id: joi.number().min(1),
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
