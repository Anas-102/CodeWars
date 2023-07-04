// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

//SOL:
function longest(s1, s2) {
    let sfinal=[];
    let s3=s1+s2;
    let s4=s3.split('')
    
    s4.forEach((c)=>{
      if(!sfinal.includes(c)){
        sfinal.push(c)
      }
    });
  //  let sf2=sfinal.toString()
  //   s4.forEach((c)=>{
  //     if(!sfinal.includes(c)){
  //       sfinal.push(c)
  //     }
  //   });
    sfinal.sort();
    let sf2=sfinal.join('');
    return sf2;
  }