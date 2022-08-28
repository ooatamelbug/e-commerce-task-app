// Initializes the `order_details` service on path `/order-details`
const { OrderDetails } = require("./order_details.class");
const createModel = require("../../models/order_details.model");
const hooks = require("./order_details.hooks");

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
  };

  // Initialize our service with any options it requires
  app.use("/order-details", new OrderDetails(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("order-details");

  service.hooks(hooks);
};
