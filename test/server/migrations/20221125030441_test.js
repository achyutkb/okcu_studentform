
exports.up = function(knex) {
    return knex.schema.createTable('test', table => {
        table.increments('id').primary().unsigned();
        table.string('B_ID').notNullable(); //student BID
        table.string('A_ID').notNullable(); // advisor_id
        table.string('D_ID').notNullable(); //dean_id 
        table.string('Sc_ID').notNullable(); //school_id 
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('test');

};
