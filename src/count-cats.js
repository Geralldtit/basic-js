module.exports = function countCats(matrix) {
  let number = 0;
  for(let k = 0; k < matrix.length; k++)
    for(let m = 0; m < matrix[k].length; m++){
      if(matrix[k][m] === "^^")
        number++;
    }


  return number;
};
