'use strict';

var request = require('supertest')("http://api.postcodes.io");
var expect = require('chai').expect;

describe('This is a test demo', function () {
    it('Should get a response', function(){
        request
            .get('/postcodes/' + "SW1A 1AA")
            .end(function(err, res){
                expect(res.status).to.equal(200);
                expect(res.body.result.postcode).to.equal("SW1A 1AA");
                done();
            });
    });
});