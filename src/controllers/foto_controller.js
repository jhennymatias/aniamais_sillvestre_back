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

    async update(request, response) {
        const { id_foto, link} = request.body;
        if (!id_foto) return res.status(404).json({})
        else {
            await connection('foto')
                .where('id_foto', '=', id_foto)
                .update({
                    link
                });
            return response.status(200).send("OK");
        }
    },

    async delete(request, response) {
        const { id_foto } = request.params;
        await connection('foto')
            .where('id_foto', id_foto)
            .delete();

        return response.status(200).send("DELETE");
    }


};