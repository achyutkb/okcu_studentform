//// this file will help to add new column in the existing table
/// create new 

exports.up = function(knex) {
    return knex.schema.table('student', table => {
        table.string('User_ID').notNullable(); //user's BID
    });
};

exports.down = function(knex) {
  
};
