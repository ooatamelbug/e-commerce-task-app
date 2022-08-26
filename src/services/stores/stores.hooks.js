const { authenticate } = require("@feathersjs/authentication").hooks;
const validation = require("feathers-validate-joi");
const {
  createSchema,
  options,
  updateSchema,
  idSchema,
} = require("./user.validation");

const proccessStore = require('../../hooks/proccess-store');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [validation.form(idSchema, options)],
    create: [authenticate("jwt"), validation.form(createSchema, options)],
    update: [
      authenticate("jwt"),
      validation.form(updateSchema, options),
      validation.form(idSchema, options),
    ],
    patch: [
      authenticate("jwt"),
      validation.form(updateSchema, options),
      validation.form(idSchema, options),
    ],
    remove: [authenticate("jwt"), validation.form(idSchema, options)],
  },

  after: {
    all: [],
    find: [proccessStore()],
    get: [proccessStore()],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
