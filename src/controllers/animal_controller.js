const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { cor, sozinho, id_localizacao, id_foto, id_user, id_especie } = request.body;
        await connection('animal_silvestre').insert({
            cor, sozinho, id_localizacao, id_foto, id_user, id_especie
        });

        return response.json(cor);
    },

    async index(request, response) {
        const animais = await connection('animal_silvestre').select('*');
        return response.json(animais);
    },

    async update(request, response) {
        const { id_animal, cor, sozinho} = request.body;
        if (!id_animal) return res.status(404).json({})
        else {
            await connection('animal_silvestre')
                .where('id_animal', '=', id_animal)
                .update({
                    cor,
                    sozinho
                });
            return response.status(200).send("OK");
        }
    },

    async delete(request, response) {
        const { id_animal } = request.params;
        await connection('animal_silvestre')
            .where('id_animal', id_animal)
            .delete();

        return response.status(200).send("DELETE");
    },


    async index_completo(request, response){
        const { id_animal } = request.params;
        const animais = await connection('animal_silvestre')
        .select('*')
        .where('id_animal', '=', id_animal)
        .join('localizacao', 'localizacao.id_localizacao','animal_silvestre.id_localizacao')
        .join('foto', 'foto.id_foto', 'animal_silvestre.id_foto')
        .join('especie', 'especie.id_especie', 'animal_silvestre.id_especie')
        .join('user', 'user.id_user', 'animal_silvestre.id_user')
        return response.json(animais);
        
    },


    async animal_estado(request, response){
        const animais = await connection('animal_silvestre')
        .select({'Nome do Estado': 'estado.descricao'})
        .count({ 'Total de animais': 'cor' })
        .join('localizacao','animal_silvestre.id_localizacao', 'localizacao.id_localizacao')
        .join('bairro', 'localizacao.id_bairro','bairro.id_bairro')
        .join('cidade', 'bairro.id_cidade', 'cidade.id_cidade')
        .join('estado', 'cidade.id_estado', 'estado.id_estado')
        .groupBy('estado.descricao')

        return response.json(animais);
        
    },

    async animal_user(resquest, response){
        const animal_user = await connection('animal_silvestre')
        .select('user.name')
        .count({'Total Animal Cadastrado':'cor'})
        .join('user', 'animal_silvestre.id_user', 'user.id_user')
        .groupBy('animal_silvestre.id_user');

        return response.json(animal_user);
    }
};

