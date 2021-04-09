exports.up = function (knex) {
    return knex.schema.createTable('animal_silvestre', function (table) {
        table.increments('id_animal').primary();
        table.string('cor').notNullable();
        table.boolean('sozinho').notNullable();
        table.integer('id_localizacao')
        .notNullable()
        .references('id_localizacao')
        .inTable('localizacao')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

        table.integer('id_foto')
        .notNullable()
        .references('id_foto')
        .inTable('foto')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

        table.integer('id_user')
        .notNullable()
        .references('id_user')
        .inTable('user')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('animal_silvestre');
};