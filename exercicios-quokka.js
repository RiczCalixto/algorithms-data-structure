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
  str.split('').reduce((object, key) => {
    if(key in object){
      object[key] ++
    } else
      object[key] = 1
      return object
  }, obj)
  console.log(obj)
  
  let counter = 1
  let maxChar = str
  
  for(keys of str){
    console.log(str)
    console.log(keys)

    if(obj[keys] > counter){
      counter += 1
      maxChar = keys
      console.log(maxChar)
    }
  }
  console.log(maxChar.toString())
  return maxChar

}

console.log(maxChar('25135'))

