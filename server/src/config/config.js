module.exports = {
    port: 8081,
    dbURL: 'mongodb://localhost/articles',
    dbOptions: {
        promiseLibrary: global.Promise,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
};
