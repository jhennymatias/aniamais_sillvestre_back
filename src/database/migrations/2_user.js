exports.up = function (knex) {
    return knex.schema.createTable('user', function (table) {
        table.increments('id_user').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.string('hash').notNullable();
        table.integer('id_tipo_user')
            .notNullable()
            .references('id_tipo_user')
            .inTable('tipo_user')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('user');
};