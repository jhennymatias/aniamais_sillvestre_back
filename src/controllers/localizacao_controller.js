const connection = require('../database/connection');
const { index_completo } = require('./animal_controller');


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
        const localizacao = await connection('localizacao').select('*');
        return response.json(localizacao);
    },

    async index_completo(request, response) {
        const localizacao_completa = await connection('localizacao')
        .select('*')
        .join('bairro', 'localizacao.id_bairro','bairro.id_bairro')
        .join('cidade', 'bairro.id_cidade', 'cidade.id_cidade')
        .join('estado', 'cidade.id_estado', 'estado.id_estado')
        .where('estado.descricao', '=', 'Santa Catarina')
        return response.json(localizacao_completa);
    },

    async update(request, response) {
        const { id_localizacao, referencia, latitude, longitude, id_bairro} = request.body;
        if (!id_localizacao) return res.status(404).json({})
        else {
            await connection('localizacao')
                .where('id_localizacao', '=', id_localizacao)
                .update({
                    referencia, latitude, longitude, id_bairro
                });
            return response.status(200).send("OK");
        }
    },

    async delete(request, response) {
        const { id_localizacao } = request.params;
        await connection('localizacao')
            .where('id_localizacao', id_localizacao)
            .delete();

        return response.status(200).send("DELETE");
    }


};