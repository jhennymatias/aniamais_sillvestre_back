exports.up = function (knex) {
    return knex.schema.createTable('estado', function (table) {
        table.increments('id_estado').primary();
        table.string('descricao').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('estado');
};