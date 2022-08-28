const joi = require("joi");

// create Stores schema
const createSchema = joi.object().keys({
  name: joi.string().trim().required().min(3),
  address: joi.string().trim().required().min(3),
  user_id: joi.number().min(1).required(),
});

// create Stores schema
const updateSchema = joi.object().keys({
  name: joi.string().trim().min(3),
  address: joi.string().trim().min(3),
  logo: joi.string().trim().min(3),
  updated_at: joi.date(),
  user_id: joi.number().min(1).required(),
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
