// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    const { app, params, result } = context;
    
    // update te order after the process of billing is complete 
    const update = await app.service("orders").patch(
      result.order_id,
      {
        status: "paid",
      },
      params
    );

    return context;
  };
};
