var myApp = require('../server/server.js');
var request = require('supertest')(myApp);


describe('my api', function() {
    it('returns hello world', function(done) {
        request
            .get('/api/domains')
            .expect('Content-Type', 'application/json; charset=utf-8', done);
    });
});
