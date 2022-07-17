module.exports = function towelSort (matrix) {
  if(matrix === undefined || matrix === [] || matrix === '') {
    return [];
  }
  let arr = [];
  let arr1 = [];
  console.log(matrix);
  for(let i = 0; i < matrix.length; i++){
      if (i % 2 === 0 ){
          arr.push(matrix[i]);
      }else{
          arr.push(matrix[i].reverse());
      }
  }
  for(let i = 0; i < arr.length; i++){
      for(let k = 0; k < arr[i].length; k++){
          arr1.push(arr[i][k]);
      }
  }
  return arr1;
};
