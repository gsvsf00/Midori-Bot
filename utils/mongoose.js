const mongoose = require('mongoose');
const { dbpasswd } = require("../botconfig.json");
var colors = require('colors');

module.exports = {
    init: () => {
        const dbOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: false,
            reconnectTries: Number.MAX_VALUE,
            reconnectInterval: 500,
            poolSize: 5,
            connectTimeoutMS: 10000,
            family:4
        };

        mongoose.connect('mongodb+srv://midoridb:${dbpasswd}}@midori-bot.xuljp.gcp.mongodb.net/midori-bot?retryWrites=true&w=majority', dbOptions);
        mongoose.set('useFindAndModify', false);
        mongoose.Promise = global.Promise;

        mongoose.connection.on('connected', () => {
            console.log('[Database]'.bgWhite + 'conexão com db estabelecida'.Blue);
        });

        mongoose.connection.on('err', err => {
            console.error('[Database]'.bgWhite + 'Mongoose connection error: \n${err.stack}'.bgRed);
        });

        mongoose.connection.on('disconnected', () => {
            console.warn('[Database]'.bgWhite + 'Mongoose connection lost'.bgYellow);
        });
    }
}
