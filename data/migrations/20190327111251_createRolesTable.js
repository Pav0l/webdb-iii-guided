
// contains our desired changes
exports.up = function(knex, Promise) {
  return knex.schema.createTable('roles', table => {
    table.increments(); // this takes care of auto incrementing (IDs...)

    table
      .string('name', 128) // provide the name for a column, type and max lenght
      .notNullable()
      .unique();
    
    table.timestamps(true, true);  // automatically creates timestamps
  })
};

// code that will undo your table creation
// and allows you to rollback in case of problems
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('roles');
};
