// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
// Beware: In some languages r must be without duplicates.


//SOL:

function inArray(array1, array2) {
    const result = array1.filter((str) => {
      return array2.some((str2) => str2.includes(str));
    });
  
    return result.sort();
  }
  
  //Non-optimized:
  
  // function inArray(array1,array2){
  //   let result = [];
  //   let arr=[]
  //   for (let i=0 ; i<array1.length ; i++){
  //     let str=array1[i];
  //     for (let j=0 ; j<array2.length ; j++){
  //       let str2=array2[j];
  //       if(str2.includes(str)){
  //         if(!result.includes(str)){
  //           result.push(str);
  //         }
  //       }
  // //       if(str[i]===str2[j]){
  // //         result+=str[i];
  // //       }
  // //       else
  // //         result+=','
  // //         break;
  //     }
  //   }
  //   console.log(result);
  //   return result.sort();
  // }