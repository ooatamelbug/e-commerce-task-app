const { Service } = require("feathers-knex");

const crypto = require("crypto");

const avatarUrl = "https://s.gravatar.com/avatar";
const query = "s=60";

exports.Stores = class Stores extends Service {
  constructor(options) {
    super({
      ...options,
      name: "stores",
    });
  }

  create(data, param) {
    const { name, address, user_id } = data;
    const hash = crypto
      .createHash("md5")
      .update(name.toLowerCase() + address.toLowerCase())
      .digest("hex");

    const avatarImage = `${avatarUrl}/${hash}/${query}`;

    const store = {
      name,
      user_id,
      address,
      logo: avatarImage,
    };

    return super.create(store, param);
  }

  async update(id, data, param) {
    const owner = await super.get(id);
    if (owner.user_id != data.user_id) {
      throw new Error("NOT allow to do this");
    }

    delete data.id;
    data = {
      ...owner,
      ...data,
    };
    return super.update(id, data, param);
  }
};
