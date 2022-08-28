/* eslint-disable no-console */

// orders-model.js - A KnexJS
//
// See http://knexjs.org/
// for more of what you can do here.
module.exports = function (app) {
  const db = app.get("knexClient");
  const tableName = "orders";
  db.schema.hasTable(tableName).then((exists) => {
    if (!exists) {
      db.schema
        .createTable(tableName, (table) => {
          table.increments("id").primary();

          table.double("discount").default(0);

          table.integer("count_product").notNullable();

          table.double("total_price").notNullable();

          table.string("status").default("pending").notNullable();

          table.integer("user_id").unsigned().notNullable();

          table
            .foreign("user_id")
            .references("id")
            .inTable("users")
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
