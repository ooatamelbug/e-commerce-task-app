const assert = require("assert");
const app = require("../../src/app");

describe("'carts' service", () => {
  it("registered the service", () => {
    const service = app.service("carts");

    assert.ok(service, "Registered the service");
  });
});
