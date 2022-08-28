// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    const { data, app } = context;

    const user = await app.service("users").find({ email: data.email});
    if (user.data.length > 0) {
      throw new Error("this email is exist before");
    }

    return context;
  };
};
