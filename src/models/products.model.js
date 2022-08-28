/* eslint-disable no-console */

// products-model.js - A KnexJS
//
// See http://knexjs.org/
// for more of what you can do here.
module.exports = function (app) {
  const db = app.get("knexClient");
  const tableName = "products";
  db.schema.hasTable(tableName).then((exists) => {
    if (!exists) {
      db.schema
        .createTable(tableName, (table) => {
          table.increments("id").primary();

          table.string("name").notNullable();
          table.text("description").notNullable();

          table.integer("quantity").notNullable();

          table.double("price").notNullable();

          table.string("status").notNullable();

          table.string("image_url");

          table.integer("store_id").unsigned().notNullable();

          table
            .foreign("store_id")
            .references("id")
            .inTable("stores")
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
