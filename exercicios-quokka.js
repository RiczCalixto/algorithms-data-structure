// quokka init = ctrl + k + q

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
reverse("caralho    ");

function reverseWithLoop(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

function reverseWithLoopOtherSyntax(str) {
  let newString = "";
  for (char of str) {
    console.log(char);
    console.log(newString);
    newString = char + newString;
    console.log(newString);
  }
  return newString;
}

console.log(reverseWithLoopOtherSyntax("puta merda"));

function palindrome(str) {
  const reversedString = str.split("").reduce((reversed, character) => {
    return character + reversed;
  }, "");
  console.log(reversedString);
}

console.log(palindrome(""));

function palindromeWithEvery(str) {
  return str.split("").every((char, index) => {
    let lastChar = str[str.length - index - 1];
    return char === lastChar;
  });
}

function palindromeWithEvery(str) {
  return str.split("").every((char, index) => {
    let lastChar = str[str.length - index - 1];
    console.log(str.length);
    console.log(index);
    console.log(lastChar);
    console.log(char);
    return char === lastChar;
  });
}

console.log(palindromeWithEvery("aabaa"));

function reverseInt(n) {
  const numeroInvertido = parseInt(
    n
      .toString()
      .split("")
      .filter(value => {
        if (value !== "0") {
          return value;
        }
      })
      .reduce((acc, init) => {
        return init + acc;
      })
  );
  return Math.sign(n) > 0 ? numeroInvertido : numeroInvertido * -1;
}

console.log(reverseInt(-1234005678900));
function maxChar(str) {
  const obj = {};
  let counter = 0;
  let maxChar = str;

  str.split("").reduce((object, key) => {
    if (key in object) {
      object[key]++;
    } else object[key] = 1;
    return object;
  }, obj);
  console.log(obj);

  for (keys of str) {
    console.log(str);
    console.log(keys);

    if (obj[keys] > counter) {
      counter += 1;
      maxChar = keys;
      console.log(maxChar);
    }
  }
  console.log(maxChar.toString());
  return maxChar;
}

console.log(maxChar("casa caralhuddd"));

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuss");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

console.log(fizzBuzz(15));

function chunk(array, size) {
  let result = [];
  for (value of array) {
    console.log(value);
    let lastArray = result[result.length - 1];
    console.log(result);
    console.log(result[result.length - 1]);
    console.log(lastArray);
    if (!lastArray || lastArray.length == size) {
      console.log(lastArray);
      console.log([value]);
      result.push([value]);
    } else {
      console.log(value);
      lastArray.push(value);
    }
  }

  return result;
}

console.log(chunk([2, 3, 4, 5, 6], 2));

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

console.log(chunkSlice([2, 3, 4, 5, 6], 2));

function anagrams(stringA, stringB) {
  const strA = stringA.replace(/[^\w]/g, "").toLowerCase();
  const strB = stringB.replace(/[^\w]/g, "").toLowerCase();
  console.log(strA);
  console.log(strB);

  const startingObjA = {};
  const startingObjB = {};
  if (strA.length !== strB.length) {
    return false;
  }

  const objA = strA
    .split("")
    .sort()
    .reduce((object, key) => {
      console.log(object);
      console.log(key);
      if (key in object) {
        object[key]++;
      } else {
        object[key] = 1;
      }
      return object;
    }, startingObjA);

  const objB = strB
    .split("")
    .sort()
    .reduce((object, key) => {
      console.log(object);
      console.log(key);
      if (key in object) {
        object[key]++;
      } else {
        object[key] = 1;
      }
      return object;
    }, startingObjB);

  for (key in startingObjA) {
    if (startingObjA[key] !== startingObjB[key]) {
      return false;
    }
    return true;
  }
  console.log(Object.keys(objA));
  console.log(Object.keys(objB));

  if (objA === objB) {
    return true;
  }
  return false;
}

console.log(anagrams("caralho    ", "lhocara  "));
