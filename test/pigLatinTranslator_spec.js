var pigLatinTranslator = require('../piglatinTranslator');
var chai = require('chai');
var expect = chai.expect;

describe('pigLatinTranslator', function() {
  it('should be a function', function() {
    expect(pigLatinTranslator).to.exist;
    expect(piglatinTranslator).to.be.an('function');
  });
  it('should return an object when invoked', function(){
    expect(pigLatinTranslator).to.be.an('object');
  });

});