const assert = require("assert");
const app = require("../../src/app");

describe("'order_details' service", () => {
  it("registered the service", () => {
    const service = app.service("order-details");

    assert.ok(service, "Registered the service");
  });
});
