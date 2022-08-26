// Initializes the `stores` service on path `/stores`
const { Stores } = require('./stores.class');
const createModel = require('../../models/stores.model');
const hooks = require('./stores.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/stores', new Stores(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('stores');

  service.hooks(hooks);
};
