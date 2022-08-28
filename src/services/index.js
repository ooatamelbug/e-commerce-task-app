const users = require("./users/users.service.js");
const products = require("./products/products.service.js");
const stores = require("./stores/stores.service.js");
const carts = require("./carts/carts.service.js");
const orders = require("./orders/orders.service.js");
const cartDetails = require("./cart_details/cart_details.service.js");
const orderDetails = require("./order_details/order_details.service.js");
const billings = require("./billings/billings.service.js");
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(stores);
  app.configure(products);
  app.configure(carts);
  app.configure(cartDetails);
  app.configure(orders);
  app.configure(orderDetails);
  app.configure(billings);
};
