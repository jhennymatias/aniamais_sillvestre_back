const connection = require('../database/connection');


module.exports = {
    async create(request, response) {
        const {referencia, latitude, longitude, id_bairro} = request.body;
        await connection('localizacao').insert({
            referencia,
            latitude,
            longitude,
            id_bairro
        });

        return response.json(descricao);
    },

    async index(request, response) {
        const classes = await connection('localizacao').select('*');
        return response.json(classes);
    },

};