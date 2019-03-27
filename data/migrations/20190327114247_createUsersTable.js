
// contains our desired changes
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments(); // this takes care of auto incrementing (IDs...)

    table
      .string('username', 128) // provide the name for a column, type and max lenght
      .notNullable();
    
    table // creating a table of user roles
      .integer('role_id')
      .unsigned()
      .references('id')  // id column in table roles
      .inTable('roles')
      .onDelete('CASCADE') // REFERENTIAL INTEGRITY
      .onUpdate('CASCADE');
    
    table.timestamps(true, true);  // automatically creates timestamps
  })
};

// code that will undo your table creation
// and allows you to rollback in case of problems
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
