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
        const especies = await connection('especie').select('*');
        return response.json(especies);
    },

    async update(request, response) {
        const { id_especie, descricao} = request.body;
        if (!id_especie) return res.status(404).json({})
        else {
            await connection('especie')
                .where('id_especie', '=', id_especie)
                .update({
                    descricao
                });
            return response.status(200).send("OK");
        }
    },

    async delete(request, response) {
        const { id_especie } = request.params;
        await connection('especie')
            .where('id_especie', id_especie)
            .delete();

        return response.status(200).send("DELETE");
    }


};