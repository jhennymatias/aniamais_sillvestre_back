exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('classe').del()
    .then(function () {
      return knex('classe').insert([
        {id_classe: 1, descricao: 'Mamífero'},
        {id_classe: 2, descricao: 'Ave'},
        {id_classe: 3, descricao: 'Repteis'},
      ]);
    });
};
