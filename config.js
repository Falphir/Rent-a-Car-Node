//ficheiro de configuração da BD

const config = {
    db: 'mongodb://localhost/rent-a-car',
    secret:"supersecret",
    expiresPassword: 86400,
    saltRounds: 10
}

module.exports = config;