// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    const { app, params, result, method } = context;

    // get the owner Store  
    const getUser = async (store) => {
      const user = await app.service("users").get(store.user_id, params);

      return {
        ...store,
        user,
      };
    };

    if (method === "find") {
      result.data = await Promise.all(result.data.map(getUser));
    } else {
      context.result = await getUser(result);
    }

    return context;
  };
};
