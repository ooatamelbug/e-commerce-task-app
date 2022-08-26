const assert = require('assert');
const app = require('../../src/app');

describe('\'stores\' service', () => {
  it('registered the service', () => {
    const service = app.service('stores');

    assert.ok(service, 'Registered the service');
  });
});
