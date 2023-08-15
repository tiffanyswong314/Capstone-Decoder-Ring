// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  const cipher = {
    a:11, b:21, c:31, d:41, e:51, 
    f:12, g:22, h:32, i:42, j:42, k:52, 
    l:13, m:23, n:33, o:43, p:53, 
    q:14, r:24, s:34, t:44, u:54, 
    v:15, w:25, x:35, y:45, z:55,
  };
  const decipher = {
    11: "a", 21: "b", 31: "c", 41: "d", 51: "e", 
    12: "f", 22: "g", 32: "h", 42: "(i/j)", 52: "k", 
    13: "l", 23: "m", 33: "n", 43: "o", 53: "p", 
    14: "q", 24: "r", 34: "s", 44: "t", 54: "u", 
    15: "v", 25: "w", 35: "x", 45: "y", 55: "z",
  };
  
  
  function polybius(input, encode = true) {
    // your solution code here

    // ignore capital letters
    const polyInput = input.toLowerCase();
    
    let encodedOutput = "";
    let decodedOutput = "";
    
    if (encode === true) {
      for (let i = 0; i < input.length; i++) {
        // if character is a space, add the space to encodedOutput
        if (polyInput[i] === " ") {
          encodedOutput += " ";
        } else {
          // if character is not a space, find the character's corresponding number value and add into encodedOutput
          encodedOutput += cipher[polyInput[i]];
        }
      }
    return encodedOutput;
  } // close if true statement
  
    if (encode === false) { // if decoding
      let count = 0; // count number of characters to see if length is even
      for (let i = 0; i< input.length; i++) {
        // add to count if polyInput[i] is not a space
        if (input[i] !== " ") count ++ }
        // divide count by 2, if modulo is not 0 return false
        if (count %2 !== 0) return false;
        
        // input length was found not odd, decode the input string
        for (let i = 0; i < input.length;) {
          // if character is a space, add the space to decodedOutput
          if (polyInput[i] === " ") {
            decodedOutput += " "; i++;
          } else {
            // use parseInt to retun an integer + find the pairs of integers
            let pair = parseInt(input[i] + input[i+1]);
            // take the pair and increment by 2 (since all number values are double digit)
            decodedOutput += decipher[pair]; i += 2;
          }
        }
        return decodedOutput;
      } // close if false statement
    
    } // close polybius function

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
