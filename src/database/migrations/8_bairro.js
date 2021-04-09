exports.up = function (knex) {
    return knex.schema.createTable('bairro', function (table) {
        table.increments('id_bairro').primary();
        table.string('descricao').notNullable();
        table.integer('id_cidade')
        .notNullable()
        .references('id_cidade')
        .inTable('cidade')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('bairro');
};