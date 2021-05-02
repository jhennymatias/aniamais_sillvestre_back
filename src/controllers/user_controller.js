const connection = require('../database/connection');
const crypto = require('crypto');
const localFunctions = require('../utils/cryptoPassword');
const encryptPassword = localFunctions.encryptPassword;

module.exports = {
    async create(request, response) {
        const { name, email, password } = request.body;
        const hashPassword = encryptPassword(password).split(':');
        const hash = hashPassword[0];
        const Criptpassword = hashPassword[1];
        const id_tipo_user = 1
        await connection('user').insert({
            name,
            email,
            password: Criptpassword,
            hash,
            id_tipo_user
        });

        return response.json(name);
    },

    async index(request, response) {
        const users = await connection('user').select('*');
        return response.json(users);
    },

    async update(request, response) {
        const { id_user,
            name,
            email,
            password: Criptpassword,
            hash,
            id_tipo_user
        } = request.body;

        if (!id_user) return res.status(404).json({})
        else {
            await connection('user')
                .where('id_user', '=', id_user)
                .update({
                    name,
                    email,
                    password: Criptpassword,
                    hash,
                    id_tipo_user
                });
            return response.status(200).send("OK");
        }
    },

    async delete(request, response) {
        const { id_user } = request.params;
        await connection('user')
            .where('id_user', id_user)
            .delete();

        return response.status(200).send("DELETE");
    }


};