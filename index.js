// TASK1
function isPowerOfThree(num) {

    if (num <= 0) {
        return false;
    }


    while (num !== 1) {
        if (num % 3 !== 0) {
            return false;
        }
        num /= 3;
    }

    return true;
}


console.log(isPowerOfThree(27));
console.log(isPowerOfThree(9));
console.log(isPowerOfThree(16));
//TASK2

function Palindrome(num) { 
    let numToStringArray = num.toString().split('');
    let reversedArray = numToStringArray.slice().reverse(); 
    if (numToStringArray.length < 2) {
        return "It's a palindrome";
    } else { 
        for (let i = 0; i < numToStringArray.length; i++) {    
            if (numToStringArray[i] !== reversedArray[i]) {
                return "It's not a palindrome";
            }
        }
        return "It's a palindrome"; 
    }
}
  
console.log(Palindrome(121)); 
console.log(Palindrome(123)); 


// TASK3

function closestLowerBound(number) {
    let result = 1;
    while (result * result <= number) {
        result++;
    }
    return result - 1;
}

console.log(closestLowerBound(20));
console.log(closestLowerBound(25));
console.log(closestLowerBound(16));

// TASK4
function countNumbersWithSumLessThanTen(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] < 10) {
                count++;
            }
        }
    }
    return count;
}


const array = [1, 5, 10, 3, 8];
console.log(countNumbersWithSumLessThanTen(array));