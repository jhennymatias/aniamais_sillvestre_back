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

    async update(request, response) {
        const { id_bairro, descricao} = request.body;
        if (!id_bairro) return res.status(404).json({})
        else {
            await connection('bairro')
                .where('id_bairro', '=', id_bairro)
                .update({
                    descricao
                });
            return response.status(200).send("OK");
        }
    },

    async delete(request, response) {
        const { id_bairro } = request.params;
        await connection('bairro')
            .where('id_bairro', id_bairro)
            .delete();

        return response.status(200).send("DELETE");
    }


};