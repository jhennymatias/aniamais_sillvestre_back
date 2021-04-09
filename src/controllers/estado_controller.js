const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { descricao} = request.body;
        await connection('estado').insert({
            descricao
        });

        return response.json(descricao);
    },

    async index(request, response) {
        const classes = await connection('estado').select('*');
        return response.json(classes);
    },

};