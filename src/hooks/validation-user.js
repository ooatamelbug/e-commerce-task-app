// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    const { data, app } = context;
    // get data from user that have same email and make sure it 
    const user = await app.service("users").find({ query: {  email: data.email} });
    if (user.data.length > 0) {
      throw new Error("this email is exist before");
    }

    return context;
  };
};
