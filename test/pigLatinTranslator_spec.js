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
  describe('word checker', function() {
    it('should check if word starts with A,E,I,O,U', function (){
      expect(piglatinTranslator.wordCheck).to.be.an('function');
      expect(pigLatinTranslator.wordCheck('eat')).to.equal(true);
      expect(pigLatinTranslator.wordCheck('pig')).to.equal(false);
    });
  });
  describe('word conversion', function(){
    it('should convert word to correct word in pig latin', function(){
      expect(pigLatinTranslator.convert).to.be.an('function');
      expect(pigLatinTranslator.convert('eat')).to.equal('eatay');
      expect(pigLatinTranslator.convert('omelet')).to.equal('omeletay');
      expect(pigLatinTranslator.convert('pig')).to.equal('ig-pay');
      expect(pigLatinTranslator.convert('banana')).to.equal('anana-bay');
    });
  });

});