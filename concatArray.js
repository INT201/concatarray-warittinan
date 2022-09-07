const { template } = require('@babel/core')

function concatArray(array1, array2) {
  //code here
  
  let x=(array1== null ||array1 == undefined) && (array2 == null||array2== undefined)? undefined:
  (array1== null ||array1 == undefined) ? array2:
  (array2== null ||array2 == undefined)?array1:
  array3=array1.concat(array2)
  return x
}
module.exports = concatArray
