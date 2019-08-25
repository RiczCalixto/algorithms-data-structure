function reverse(str) {
  // const trimStr = str.trim()
  const splitStr = str.split("");
  console.log(splitStr);
  const reverseStr = splitStr.reverse();
  console.log(reverse);
  const joinStr = reverseStr.join("");
  console.log(joinStr);
  return joinStr;
}

function reverseWithLoop(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

reverseWithLoop("puta merda");

function reverseWithLoopOtherSyntax(str) {
  let newString = "";
  for (char of str) {
    newString = char + str;
  }
  return newString;
}
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
function reverseUsingReduce(str) {}
return str.split("").reduce((reversed, character) => {
  return character + reversed;
}, "");

// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  const reversedString = str.split("").reduce((reversed, character) => {
    return character + reversed;
  }, "");
  // if (str === reversedString) {
  //   return true;
  // }
  return str === reversedString;
}

function palindromeWithEvery(str) {
  return str.split("").every((char, index) => {
    let lastChar = str[str.length - index - 1];
    return char === lastChar;
  });
}

// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const numeroInvertido = parseInt(
    n
      .toString()
      .split("")
      .reduce((acc, init) => {
        return init + acc;
      })
  );
  return Math.sign(n) < 0 ? numeroInvertido * -1 : numeroInvertido;
}


// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const obj = {};
  let counter = 0
  let maxChar = ''

  str.split('').reduce((object, key) => {
    if(key in object){
      object[key] ++
    } else
      object[key] = 1
      return object
  }, obj)

  for(keys of str){
    if(obj[keys] > counter){
      counter += 1
      maxChar = keys
    }
  }
  return maxChar
}

// Com {for of} e {for in}
function maxChar(str) {
  const obj = {};
  let counter = 0;
  let maxChar = '';

  for(char of str) {
    if(obj[char]) {
      obj[char] ++
    } else {
      obj[char] =1
    }
  }
  
  for(key in obj){
    if(obj[key] > counter){
      counter += 1
      maxChar = key
    }
  }
  return maxChar
}