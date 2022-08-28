// Initializes the `carts` service on path `/carts`
const { Carts } = require("./carts.class");
const createModel = require("../../models/carts.model");
const hooks = require("./carts.hooks");

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
  };

  // Initialize our service with any options it requires
  app.use("/carts", new Carts(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("carts");

  service.hooks(hooks);
};
