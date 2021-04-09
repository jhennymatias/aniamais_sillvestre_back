exports.up = function (knex) {
    return knex.schema.createTable('cidade', function (table) {
        table.increments('id_cidade').primary();
        table.string('descricao').notNullable();
        table.integer('id_estado')
        .notNullable()
        .references('id_estado')
        .inTable('estado')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('cidade');
};