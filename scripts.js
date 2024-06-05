//  1

function arraySum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
  
  const numbers = [10, 50, 6, 7, 8, 11, 6, 3, 9];
  console.log(arraySum(numbers)); 
// 2

let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true 
  };
  
  function returnName(user) {
    if (user.isloggedin) {
      return '${user.firstname}  ${user.lastname}';
    } else {
      return false;
    }
  }
  
 console.log(returnName(user));

// 3

 function ArrayMax(array3) {      
    let max = array3[0];    
    for (let i = 1; i < array3.length; i++) {
      if (array3[i] > max) {
        max = array3[i];
      }
    }    
    return max;
  }
  
  const array3 = [1, 2, 3, 1, 2, 3, 6, 1, 2];  
  console.log(ArrayMax(array3));

// 4

  function EvenOrOdd(number) {
    if (number % 2 === 0) {
      return 'this number is even';
    } else {
      return 'this number is odd';
    }
  }
  

//5 

let array = [1, 2, 3, 4, 5];
let reversedArray = [];

for (let i = array.length - 1; i >= 0; i--) {
  reversedArray.push(array[i]);
}
console.log(reversedArray);

// 6
const checkAge = (age) => age >= 18 ? 'სრულწლოვანი' : 'არასრულწლოვანი';
