/* eslint-disable no-console */

// order_details-model.js - A KnexJS
//
// See http://knexjs.org/
// for more of what you can do here.
module.exports = function (app) {
  const db = app.get("knexClient");
  const tableName = "order_details";
  db.schema.hasTable(tableName).then((exists) => {
    if (!exists) {
      db.schema
        .createTable(tableName, (table) => {
          table.increments("id").primary();

          table.integer("quantity").notNullable();
          table.double("price_of_one").notNullable();
          table.double("total_price").notNullable();

          table.integer("order_id").unsigned().notNullable();
          table
            .foreign("order_id")
            .references("id")
            .inTable("orders")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");

          table.integer("product_id").unsigned().notNullable();
          table
            .foreign("product_id")
            .references("id")
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
