var pigLatinTranslator = require('../piglatinTranslator.js');
var Chai = require('chai');
var expect = Chai.expect;
var myTranslator = pigLatinTranslator();

describe('pigLatinTranslator', function() {
  it('should be a function', function() {
    expect(myTranslator).to.exist;
  });
  it('should return an object when invoked', function(){
    expect(myTranslator).to.be.an('object');
  });
  describe('word conversion', function(){
    it('should convert word to correct word in pig latin', function(){
      expect(myTranslator.convert).to.be.an('function');
      expect(myTranslator.convert('eat')).to.equal('eatay');
      expect(myTranslator.convert('omelet')).to.equal('omeletay');
      expect(myTranslator.convert('pig')).to.equal('ig-pay');
      expect(myTranslator.convert('banana')).to.equal('anana-bay');
      expect(myTranslator.convert('Apple')).to.equal('Appleay');
      expect(myTranslator.convert('trash')).to.equal('ash-tray');

    });
  });

});