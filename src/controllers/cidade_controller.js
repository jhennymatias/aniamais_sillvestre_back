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

    async update(request, response) {
        const { id_cidade, descricao} = request.body;
        if (!id_cidade) return res.status(404).json({})
        else {
            await connection('cidade')
                .where('id_cidade', '=', id_cidade)
                .update({
                    descricao
                });
            return response.status(200).send("OK");
        }
    },

    async delete(request, response) {
        const { id_cidade } = request.params;
        await connection('cidade')
            .where('id_cidade', id_cidade)
            .delete();

        return response.status(200).send("DELETE");
    }


};