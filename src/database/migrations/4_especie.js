exports.up = function (knex) {
    return knex.schema.createTable('especie', function (table) {
        table.increments('id_especie').primary();
        table.string('descricao').notNullable();
        table.integer('id_classe')
        .notNullable()
        .references('id_classe')
        .inTable('classe')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('especie');
};