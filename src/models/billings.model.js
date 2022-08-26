/* eslint-disable no-console */

// billings-model.js - A KnexJS
//
// See http://knexjs.org/
// for more of what you can do here.
module.exports = function (app) {
  const db = app.get("knexClient");
  const tableName = "billings";
  db.schema.hasTable(tableName).then((exists) => {
    if (!exists) {
      db.schema
        .createTable(tableName, (table) => {
          table.increments("id");
          table.double("total_amount");
          table.string("type_paid");

          table
            .integer("user_id")
            .reference("id")
            .inTable("users")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");

          table
            .integer("order_id")
            .reference("id")
            .inTable("orders")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");

          table
            .integer("order_id")
            .reference("id")
            .inTable("orders")
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
