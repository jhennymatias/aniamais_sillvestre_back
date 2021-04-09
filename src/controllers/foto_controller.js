const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const {link} = request.body;
        await connection('foto').insert({
            link
        });

        return response.json(link);
    },

    async index(request, response) {
        const fotos = await connection('foto').select('*');
        return response.json(fotos);
    },

};