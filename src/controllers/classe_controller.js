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

    async update(request, response) {
        const { id_classe, descricao} = request.body;
        if (!id_classe) return res.status(404).json({})
        else {
            await connection('classe')
                .where('id_classe', '=', id_classe)
                .update({
                    descricao
                });
            return response.status(200).send("OK");
        }
    },

    async delete(request, response) {
        const { id_classe } = request.params;
        await connection('classe')
            .where('id_classe', id_classe)
            .delete();

        return response.status(200).send("DELETE");
    }


};