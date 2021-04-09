const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const {descricao, id_classe} = request.body;
        await connection('especie').insert({
            descricao,
            id_classe
        });

        return response.json(descricao);
    },

    async index(request, response) {
        const classes = await connection('especie').select('*');
        return response.json(classes);
    },

};