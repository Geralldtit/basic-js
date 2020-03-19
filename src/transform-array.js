module.exports = function transform(arr) {
    if(!Array.isArray(arr)) throw 'Error: input parameter should be array!';

    for( let i = 0; i < arr.length; i++){
      if(typeof arr[i] === 'string' || arr[i] instanceof String){
        switch(arr[i]){
          case '--discard-next':
            if(i < arr.length-1)
              arr.splice(i+1, 1);
            break;
          case '--discard-prev':
            if(i != 0)
              arr.splice(i-1, 1);
            break;
          case '--double-next':
            if(i < arr.length-1 && Number(arr[i+1]))
              arr[i+1] *= 2;
            break;
          case '--double-prev':
            if(i != 0 && Number(arr[i-1]))
              arr[i-1] *= 2;
            break;
        }
        arr.splice(i, 1);
      }
    }

    return arr;
};
