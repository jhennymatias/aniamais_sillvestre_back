const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const {descricao, id_cidade} = request.body;
        await connection('bairro').insert({
            descricao,
            id_cidade
        });

        return response.json(descricao);
    },

    async index(request, response) {
        const classes = await connection('bairro').select('*');
        return response.json(classes);
    },

};