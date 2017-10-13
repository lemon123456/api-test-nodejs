var host = {
    test: require('./test.js'),
    prod: require('./prod.js')
};

var ENV;

module.exports = function(env) {
    if (env) {
        ENV = host[env];
        return;
    }
    return ENV;
};