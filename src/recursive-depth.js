module.exports = class DepthCalculator {
    calculateDepth(arr) {
      if(Array.isArray(arr)){
        let depth = 0;
        for(let i = 0; i < arr.length; i++){
          if(Array.isArray(arr[i])){
            let buffer = this.calculateDepth(arr[i])
            depth = depth < buffer ? buffer: depth;
          }
        }
        return depth + 1;
      }else {
        throw 'Error: input parameter should be array!';
      }
    }
};
