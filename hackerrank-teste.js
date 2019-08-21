function vowelsAndConsonants(string) {
  const vogais = 'aeiou'
  let consoantes = ''

  for (let i = 0; i < string.length; i++){
      if (vogais.includes(string[i])){
          console.log(string[i])
      } else {
          consoantes += string[i] + ' \n'
      }
  }
  console.log(consoantes.trim())
}

function getSecondLargest(nums) {
  // Complete the function
  let largest = nums[0];
  let secondLargest = -1;
  for (let i = 0; i < nums.length; i++){
      if (nums[i] > largest) {
          secondLargest = largest
          largest = nums[i]
      }
      if (nums[i] > secondLargest && nums[i] < largest) {
          secondLargest = nums[i]
      }
  }
  return secondLargest
}

const array = [{x:1, y:1}, {x:2, y:2}, {x:3, y:1}]

console.log(array.filter((object) => object.x == object.y)
)

/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
  return objects.filter((object) => {return object.x == object.y}).length
}

function rotLeft(a, d) {
  while (d--) a.push(a.shift());
  return a;
}


function oddNumbers(l, r) {
  const array = []
  for (let i = l;  i <= r; i++) {
  if(i%2 === 1){
      array.push(i)
  }
}

}

function mergeStrings(primeiraString, segundaString) {
  let newString = '';
  let maiorString;

  if(primeiraString.length > segundaString.length){
      maiorString = primeiraString

  } else {
      maiorString = segundaString
  }

  for (let i = 0; i < maiorString.length; i++) {
       if(primeiraString[i]){
         newString = newString + primeiraString[i]
       }
       if(segundaString[i]){
        newString = newString + segundaString[i]
       }
    }
    return newString
}

console.log(mergeStrings('casa', 'porra'))

function priceCheck(products, productPrices, productSold, soldPrice) {
  // Write your code here
 
  let erros = 0;
  
  for(let i = 0; i < productSold.length; i++) {
      const indexOfProduct = products.indexOf(productSold[i])
    if (productPrices[i] !== productPrices[indexOfProduct]){
      erros ++;
    }
  }
  return erros
}

