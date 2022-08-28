const joi = require("joi");

// create user schema
const createSchema = joi.object().keys({
  firstname: joi.string().trim().required().min(3),
  lastname: joi.string().trim().required().min(3),
  password: joi.string().trim().min(8).required(),
  email: joi.string().email().trim().required(),
});

// create user schema
const updateSchema = joi.object().keys({
  firstname: joi.string().trim().min(3),
  lastname: joi.string().trim().min(3),
  password: joi.string().trim().min(8),
  email: joi.string().email().trim(),
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
