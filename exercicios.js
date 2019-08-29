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
  let counter = 0;
  let maxChar = "";

  str.split("").reduce((object, key) => {
    if (key in object) {
      object[key]++;
    } else object[key] = 1;
    return object;
  }, obj);

  for (keys of str) {
    if (obj[keys] > counter) {
      counter += 1;
      maxChar = keys;
    }
  }
  return maxChar;
}

// Com {for of} e {for in}
function maxChar(str) {
  const obj = {};
  let counter = 0;
  let maxChar = "";

  for (char of str) {
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }

  for (key in obj) {
    if (obj[key] > counter) {
      counter += 1;
      maxChar = key;
    }
  }
  return maxChar;
}

// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunkedArray = [];
  for (value of array) {
    const lastElement = chunkedArray[chunkedArray.length - 1];
    if (!lastElement || lastElement.length === size) {
      chunkedArray.push([value]);
    } else {
      lastElement.push(value);
    }
  }
  return chunkedArray;
}

function chunkSlice(array, size) {
  const chunkedArray = [];
  let index = 0;

  while (index < array.length) {
    console.log(index);
    console.log(array.slice(index, index + size));
    chunkedArray.push(array.slice(index, index + size));

    index += size;
  }

  return chunkedArray;
}

// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const strA = stringA.replace(/[^\w]/g, "").toLowerCase();
  const strB = stringB.replace(/[^\w]/g, "").toLowerCase();
  const startingObjA = {};
  const startingObjB = {};

  if(strA.length !== strB.length) {
    return false
  }

  const objA = strA.split("").sort().reduce((object, key) => {
    if(key in object) {
      object[key] ++
    } else {
      object[key] = 1
    }
    return object
  }, startingObjA)

  const objB = strB.split("").sort().reduce((object, key) => {
    if(key in object) {
      object[key] ++
    } else {
      object[key] = 1
    }
    return object
  }, startingObjB)

  for (key in startingObjA) {
    if(startingObjA[key] !== startingObjB[key]) {
      return false
    }
    return true
  }
  
  if(objA === objB) {
    return true
  } 
}
