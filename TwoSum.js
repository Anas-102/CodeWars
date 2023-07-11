// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: http://oj.leetcode.com/problems/two-sum/

// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]

//SOL:
function twoSum(numbers, target) {
    const map = new Map(); // Create a Map to store seen numbers and their indices
  
    for (let i = 0; i < numbers.length; i++) {
      const complement = target - numbers[i];
  
      if (map.has(complement)) {
        return [map.get(complement), i]; // Return the indices if complement is found
      }
  
      map.set(numbers[i], i); // Store current number and its index in the map
    }
  
    return []; // Return an empty array if no valid pair is found
  }
  
  //non-optimized:
  // function twoSum(numbers, target) {
  //   let result=[];
  //   for (let i=0;i<numbers.length;i++){
  //     for(let j=numbers.length-1;j>i;j--){
  //       if(target===numbers[i]+numbers[j]){
  //         result=[i,j];
  //       }
  //     }
  //   }
  //   return result;
  // }
  
  