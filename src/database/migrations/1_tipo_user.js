exports.up = function (knex) {
    return knex.schema.createTable('tipo_user', function (table) {
        table.increments('id_tipo_user').primary();
        table.string('descricao').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('tipo_user');
};