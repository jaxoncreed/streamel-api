var should = require('should'); 
var assert = require('assert');
var request = require('supertest');
var seriesData = require('./seriesData');


describe("Series CRUD", function() {
    var url = 'http://localhost:1337';

    before(function(done) {
        this.timeout(6000);
        require('../../app.js');
        setTimeout(function() { done() }, 5000);
    });

    seriesData.forEach(function(test) {
        it (test.title, function(done) {
            request(url)[test.request.method](test.request.path).send(test.request.body)
                .end(function(err, res) {
                    res.should.have.property('status', test.response.status);
                    test.response.bodyTest(res.body, done());
                });
        });
    });
});