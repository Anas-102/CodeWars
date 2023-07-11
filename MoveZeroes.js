// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

//SOL:

function moveZeros(arr) {
    let zeroes=[];
    let nonZeroes=[];
    zeroes = arr.filter((a)=>a===0);
    nonZeroes = arr.filter((a)=>a!==0);
    zeroes.forEach((a)=>{
      nonZeroes.push(a);
    });
    console.log(nonZeroes);
    return nonZeroes;
  }

  moveZeros([false,1,0,1,2,0,1,3,"a"]);