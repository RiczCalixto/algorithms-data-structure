function reverse(str) {
  // const trimStr = str.trim()
  const splitStr = str.split("")
  console.log(splitStr)
  const reverseStr = splitStr.reverse()
  console.log(reverse)
  const joinStr = reverseStr.join('')
  console.log(joinStr)
  return joinStr
}

function reverseWithLoop(str) {
  let newString = '';
  for(let i = str.length - 1; i >= 0; i--){
    newString += str[i]
  }
  return newString;
}

reverseWithLoop('puta merda');