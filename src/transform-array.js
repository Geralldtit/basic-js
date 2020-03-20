module.exports = function transform(arr, expected, shouldPrint) {
  if(!Array.isArray(arr)) throw 'Error: input parameter should be array!';

  if(shouldPrint){
    console.log('============input===========');
    for(let k = 0 ; k < arr.length; k++)
      console.log(arr[k]+', ');
    console.log('============expected=============');
    for(let k = 0 ; k < expected.length; k++)
      console.log(expected[k]+', ');
  }

  let outputArr = [...arr];
  let isCommand = false;
  for( let q = 0; q < arr.length; q++){
    if(typeof arr[q] === 'string' || arr[q] instanceof String){
      switch(arr[q]){
        case '--discard-next':
          if(q < arr.length-1)
            outputArr[q+1] = '--discard-next';
          break;
        case '--discard-prev':
          if(q > 0)
            outputArr[q-1] = '--discard-prev';
          break;
        case '--double-next':
          if(q < arr.length-1){
            outputArr.splice(q+1, 0, arr[q+1]);
            outputArr.splice(q, 1);
          }
          break;
        case '--double-prev':
          if(q > 0 ){
            outputArr.splice(q, 0, arr[q-1]);
            outputArr.splice(q+1, 1);
          }
          break;
      }
    }
  }

  let result = outputArr.filter((item) => (typeof item != 'string')|| ((typeof item === 'string') && (item[0]!='-')) );
  return result;
};
