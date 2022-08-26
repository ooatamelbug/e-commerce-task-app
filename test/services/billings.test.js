const assert = require('assert');
const app = require('../../src/app');

describe('\'billings\' service', () => {
  it('registered the service', () => {
    const service = app.service('billings');

    assert.ok(service, 'Registered the service');
  });
});
