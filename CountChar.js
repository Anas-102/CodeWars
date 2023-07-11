// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

//SOL:

function count(string) {
    const result = {};
  
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      result[char] = (result[char] || 0) + 1;
    }
  
    return result;
  }
  
  
  // function count(string) {
  //   const str = string.split('');
  //   //let rep=new Array(str.length).fill(1);
  //   const map=new Map();
  //   let obj={};
  //   for(let i=0; i<str.length; i++){
  // //     const ch=str[i];
  //     if(map.has(str[i])){
  //       map.set(str[i],map.get(str[i])+1)
  //     }
  //     else
  //       map.set(str[i],1);
  //   }
  //   //console.log(map);
  //   for(let [key, value] of map){
  // //     let key=map.keys(key[i]);
  // //     let value=map.values(value[i]);
  //  //   console.log(map.get());
  //     obj[key]=value;
  //   }
  //   console.log(obj);
  //   return obj;
  //}