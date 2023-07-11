// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= length of input <= 100

// All inputs will be strings, consisting only of characters ( and ).
// Empty strings are considered balanced (and therefore valid), and will be tested.
// For languages with mutable strings, the inputs should not be mutated.

//SOL:

function validParentheses(parenStr) {
    let stack=[];
    let arr=parenStr.split('');
    let count=0;
    
    for(var i=0; i<parenStr.length;i++){
      if (arr[i]==='('){
        stack.push(arr[i]);
      }
      else if(arr[i]===')'){
        if(stack.length===0 || stack.pop()!=='('){
          return false;
        }  
      }
      }
    if(stack.length===0){
      return true;
    }
    else
      return false;
  }