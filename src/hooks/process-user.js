// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    const { app, params, result } = context;

    // create cart for this user after created it
    console.log(result)
    console.log(params)
    const addCart = app.service("carts").create({ user_id: result.id }, params);

    return context;
  };
};
