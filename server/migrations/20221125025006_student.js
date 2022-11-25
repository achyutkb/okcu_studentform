
exports.up = function(knex) {
  
    return knex.schema.createTable('students', table => {
        table.increments('id').primary().unsigned();
        table.string('BID').notNullable(); //student BID
        table.string('Advisor_ID').notNullable(); // advisor_id
        table.string('Dean_ID').notNullable(); //dean_id 
        table.string('School_ID').notNullable(); //school_id 
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.integer("user_id").notNullable().unsigned().references("id").inTable("users").onDelete("CASCADE");
    });

};

exports.down = function(knex) {
   return knex.schema.dropTableIfExists('students');
};
