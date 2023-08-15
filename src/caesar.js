// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  function caesar(input, shift, encode = true) {
    // your solution code here

    // returns false if the shift value is equal to 0, less than -25, greater than 25, or not present
    if (shift === 0 || shift < -25 || shift > 25 || shift === undefined) {
      return false;
    }
    if (encode === false) shift *= -1;
    let output = "";
    // ignore capital letters
    let inputCode = input.toLowerCase();
    for (let i = 0; i < input.length; i++) {
      if (alphabet.includes(inputCode[i])) {
        const index = (alphabet.indexOf(inputCode[i]) + shift + 26) % 26;
        output += alphabet[index];
      } else {
        output += inputCode[i];
      }
    }
    return output;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
