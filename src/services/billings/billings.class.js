const { Service } = require("feathers-knex");

exports.Billings = class Billings extends Service {
  constructor(options) {
    super({
      ...options,
      name: "billings"
    });
  }
  create(data, param) {
    const { order_id, user_id, type_paid, total_amount } = data;

    const newBillings = {
      order_id,
      user_id,
      type_paid,
      total_amount
    };

    return super.create(newBillings, param);
  }
};
