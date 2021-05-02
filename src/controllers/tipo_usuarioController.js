const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { descricao} = request.body;
        await connection('tipo_user').insert({
            descricao
        });

        return response.json(descricao);
    },

    async index(request, response) {
        const tipo_users = await connection('tipo_user').select('*');
        return response.json(tipo_users);
    },

    async update(request, response) {
        const { id_tipo_user, descricao} = request.body;
        if (!id_tipo_user) return res.status(404).json({})
        else {
            await connection('tipo_user')
                .where('id_tipo_user', '=', id_tipo_user)
                .update({
                    descricao
                });
            return response.status(200).send("OK");
        }
    },

    async delete(request, response) {
        const { id_tipo_user } = request.params;
        await connection('tipo_user')
            .where('id_tipo_user', id_tipo_user)
            .delete();

        return response.status(200).send("DELETE");
    }


};