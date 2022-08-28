const assert = require("assert");
const app = require("../../src/app");

describe("'cart_details' service", () => {
  it("registered the service", () => {
    const service = app.service("cart-details");

    assert.ok(service, "Registered the service");
  });
});
