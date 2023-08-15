// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const standardAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const cipher = [];

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    const checkForRepeats = new Set(alphabet);
    // return false if alphabet is undefined, less than 26 characters, has duplicate characters
    if (alphabet === undefined || alphabet.length < 26 || [...checkForRepeats].length < 26) return false;
    // split alphabet so that each character is an individual substring 
    alphabet.split("");
    
    if (encode) {
      for (let i = 0; i < 26; i++) {
        cipher[standardAlphabet[i]] = alphabet[i];
      }
    } else {
    
      // if decoding
      for (let i = 0; i < 26; i++) {
        cipher[alphabet[i]] = standardAlphabet[i];
      }
    }
    // ignore capital letters
    let answer = input.toLowerCase().split("")
    // to create a new array
    .map((letter) => {
      if (letter === " ") return " ";
      return cipher[letter]
    });
    return answer.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
