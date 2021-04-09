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

};