exports.up = function (knex) {
    return knex.schema.createTable('foto', function (table) {
        table.increments('id_foto').primary();
        table.string('link').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('foto');
};