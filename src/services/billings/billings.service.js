// Initializes the `billings` service on path `/billings`
const { Billings } = require('./billings.class');
const createModel = require('../../models/billings.model');
const hooks = require('./billings.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/billings', new Billings(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('billings');

  service.hooks(hooks);
};
