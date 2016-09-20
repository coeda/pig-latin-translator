function pigLatinTranslator(){
  let module = {};
  module.convert = function(word){
    let savedConst;
    let splicedLetters;
    for(let i = 0; i < word.legth; i++){
      console.log('first for loop');
      let charCheck = word.charAt(i);
      if(word.charAt(i) === 'A' ||
      word.charAt(i) === 'a' ||
      word.charAt(i) === 'E' ||
      word.charAt(i) === 'e' ||
      word.charAt(i) === 'I' ||
      word.charAt(i) === 'i' ||
      word.charAt(i) === 'O' ||
      word.charAt(i) === 'o' ||
      word.charAt(i) === 'U' ||
      word.charAt(i) === 'u'){
        console.log('passed first check');
        if(i === 0){
          console.log('hello');
          return word + 'ay';
        } else {
          let secondWord = '-' + word.splice(i,word.length) + 'ay';
          let newWord = word.splice(0,i);
          return newWord + secondWord;
        }
      }
    }
  };
  return module;
}

module.exports = pigLatinTranslator;