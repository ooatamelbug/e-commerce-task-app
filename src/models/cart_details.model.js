/* eslint-disable no-console */

// cart_details-model.js - A KnexJS
//
// See http://knexjs.org/
// for more of what you can do here.
module.exports = function (app) {
  const db = app.get("knexClient");
  const tableName = "cart_details";
  db.schema.hasTable(tableName).then((exists) => {
    if (!exists) {
      db.schema
        .createTable(tableName, (table) => {
          table.increments("id");
          table.integer("quantity");
          table.double("price_of_one");
          table.double("total_price");

          table
            .integer("cart_id")
            .reference("id")
            .inTable("carts")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");

          table
            .integer("product_id")
            .reference("id")
            .inTable("products")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");

          table.timestamps(true, true);
        })
        .then(() => console.log(`Created ${tableName} table`))
        .catch((e) => console.error(`Error creating ${tableName} table`, e));
    }
  });

  return db;
};
