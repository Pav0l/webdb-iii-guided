
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {role_id: 1, name: 'Jack'},
        {role_id: 2, name: 'Frank'},
        {role_id: 3, name: 'Joe'}
      ]);
    });
};
