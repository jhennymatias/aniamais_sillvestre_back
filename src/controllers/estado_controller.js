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
        const estados = await connection('estado').select('*');
        return response.json(estados);
    },

    async update(request, response) {
        const { id_estado, descricao} = request.body;
        if (!id_estado) return res.status(404).json({})
        else {
            await connection('estado')
                .where('id_estado', '=', id_estado)
                .update({
                    descricao
                });
            return response.status(200).send("OK");
        }
    },

    async delete(request, response) {
        const { id_estado } = request.params;
        await connection('estado')
            .where('id_estado', id_estado)
            .delete();

        return response.status(200).send("DELETE");
    }


};