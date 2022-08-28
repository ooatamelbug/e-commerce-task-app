// Initializes the `cart_details` service on path `/cart-details`
const { CartDetails } = require("./cart_details.class");
const createModel = require("../../models/cart_details.model");
const hooks = require("./cart_details.hooks");

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
  };

  // Initialize our service with any options it requires
  app.use("/cart-details", new CartDetails(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("cart-details");

  service.hooks(hooks);
};
