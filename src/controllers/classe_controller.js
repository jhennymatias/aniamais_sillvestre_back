const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { descricao} = request.body;
        await connection('classe').insert({
            descricao
        });

        return response.json(descricao);
    },

    async index(request, response) {
        const classes = await connection('classe').select('*');
        return response.json(classes);
    },

};