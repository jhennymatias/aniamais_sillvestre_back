const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const {descricao, id_estado} = request.body;
        await connection('cidade').insert({
            descricao,
            id_estado
        });

        return response.json(descricao);
    },

    async index(request, response) {
        const classes = await connection('cidade').select('*');
        return response.json(classes);
    },

};