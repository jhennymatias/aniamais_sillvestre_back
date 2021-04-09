exports.up = function (knex) {
    return knex.schema.createTable('localizacao', function (table) {
        table.increments('id_localizacao').primary();
        table.string('referencia').notNullable();
        table.string('latitude').notNullable();
        table.string('longitude').notNullable();
        table.integer('id_bairro')
        .notNullable()
        .references('id_bairro')
        .inTable('bairro')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('localizacao');
};