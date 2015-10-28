var parser = require('./../parser');
var assert = require('assert');


module.exports = {
  beforeEach: function (done) {
    setTimeout(done, 400);
  },

  'parse test string': function(done) {

    var string = 'This is a string with {{ ab49fd20.key_1 }}, including {{ 9822df87.another_key }} and also {{ ab49fd20.key_2 }}.';
    var map = {
      'ab49fd20': {
        key_1: 'some data'
      },
      '9822df87': {
        another_key: 'big data',
        yet_another_key: 'small data'
      }
    };

    assert.equal(parser(string, map), 'This is a string with some data, including big data and also <nothing>.');
    done();
  }

};



