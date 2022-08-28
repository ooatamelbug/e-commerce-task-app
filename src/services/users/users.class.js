const { Service } = require("feathers-knex");
const crypto = require("crypto");

const avatarUrl = "https://s.gravatar.com/avatar";
const query = "s=60";

exports.Users = class Users extends Service {
  constructor(options) {
    super({
      ...options,
      name: "users",
    });
  }

  create(data, param) {
    const { email, password, firstname, lastname } = data;
    const hash = crypto
      .createHash("md5")
      .update(email.toLowerCase())
      .digest("hex");

    const avatarImage = `${avatarUrl}/${hash}/${query}`;

    const user = {
      email,
      password,
      firstname,
      lastname,
      avatar: avatarImage,
    };

    return super.create(user, param);
  }
};
