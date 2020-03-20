/*
  The one who discribe this task should burn in hell!
*/
module.exports = function transform(arr, expected, shouldPrint) {
  if(!Array.isArray(arr)) throw 'Error: input parameter should be array!';

  let outputArr = [...arr];
  let isCommand = false;
  for( let q = 0; q < arr.length; q++){
    if(typeof arr[q] === 'string' || arr[q] instanceof String){
      switch(arr[q]){
        case '--double-next':
          if(q < arr.length-1)
            arr.splice(q+1, 0, arr[q+1]);
          arr.splice(q, 1);
          break;
        case '--double-prev':
          arr.splice(q, 1);
          if(q > 0 ){
            arr.splice(q, 0, arr[q-1]);
          }
          break;
      }
    }
  }

  for( let q = 0; q < arr.length; q++){
    if(typeof arr[q] === 'string' || arr[q] instanceof String){
      switch(arr[q]){
        case '--discard-next':
          if(q < arr.length-1)
            arr.splice(q+1, 1);
          arr.splice(q, 1);
          q--;
          break;
        case '--discard-prev':
          if(q > 0){
            arr.splice(q-1, 1);
            q--;
          }
          arr.splice(q, 1);
          break;
      }
    }
  }

  return arr;
};
