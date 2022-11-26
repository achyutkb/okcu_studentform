
exports.up = function(knex) {
    return knex.schema.createTable('academic_info', table => {
        table.increments('id').primary().unsigned();
        table.string('school_name').notNullable();
        table.string('degree').notNullable();
        table.string('major').notNullable();
        table.string('minor').notNullable();
        table.string('advisor').notNullable();
        table.string('dean').notNullable();
        table.string('school_falg').notNullable();//old/new
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('academic_info');
};
