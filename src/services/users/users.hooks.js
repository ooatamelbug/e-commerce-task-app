const { authenticate } = require("@feathersjs/authentication").hooks;
const validation = require("feathers-validate-joi");
const {
  createSchema,
  options,
  updateSchema,
  idSchema,
} = require("./user.validation");

const { hashPassword, protect } =
  require("@feathersjs/authentication-local").hooks;

const validationUser = require("../../hooks/validation-user");

const processUser = require("../../hooks/process-user");

module.exports = {
  before: {
    all: [],
    find: [authenticate("jwt")],
    get: [authenticate("jwt"), validation.form(idSchema, options)],
    create: [
      hashPassword("password"),
      validation.form(createSchema, options),
      validationUser(),
    ],
    update: [
      hashPassword("password"),
      authenticate("jwt"),
      validation.form(updateSchema, options),
      validationUser(),
    ],
    patch: [
      hashPassword("password"),
      authenticate("jwt"),
      validation.form(idSchema, options),
    ],
    remove: [authenticate("jwt")],
  },

  after: {
    all: [
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect("password"),
    ],
    find: [],
    get: [],
    create: [processUser()],
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
