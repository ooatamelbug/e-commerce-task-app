// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    const { app, params, method, data, path, id } = context;

    if (!params.user.id) {
      throw new Error("NOT ALLOW");
    } else {
      if (id && parseInt(id) != +id) {
        throw new Error("error in params");
      }
      if (method == "update") {
        data.updated_at = new Date();
        context.data.user_id = params.user.id;
      }
    }

    return context;
  };
};
