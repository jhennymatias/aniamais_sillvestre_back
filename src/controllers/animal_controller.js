const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const {cor, sozinho, id_localizacao, id_foto, id_user} = request.body;
        await connection('animal_silvestre').insert({
            cor, sozinho, id_localizacao, id_foto, id_user
        });

        return response.json(cor);
    },

    async index(request, response) {
        const animais = await connection('animal_silvestre').select('*');
        return response.json(animais);
    },

};