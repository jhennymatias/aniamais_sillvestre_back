const connection = require('../database/connection');
const localFunctions = require('../utils/cryptoPassword');
const decryptPassword = localFunctions.decryptPassword;

module.exports = {
    async create(request, response) {
        const { LoginEmail, LoginPassword } = request.body;
        const user = await connection('user')
            .where('email', LoginEmail)
            .select('*')
            .first();

        if (user) {
            const { password, hash } = user
            const comparePassword = decryptPassword(hash + ':' + password);
            if (LoginPassword === comparePassword) {
                console.log('sucesso')
                response.status(200).json(user)
            } else {
                return response.status(400).json({ error: "Wrong password" })

            }
        } else {
            return response.status(400).json({ error: "wrong user" })
        }

    }

}