const { Service } = require("feathers-knex");

exports.Products = class Products extends Service {
  constructor(options) {
    super({
      ...options,
      name: "products",
    });
  }

  async update(id, data, param) {
    const product = await super.get(id);
    const updatedata = {
      ...product,
      ...data,
    };
    return super.update(id, updatedata, param);
  }
  patch(id, data, param) {
    return super.patch(id, data, param);
  }
};
