
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) { return [] };
  let isReverse =  false;
  let arr = matrix;
  while (arr.some( el => Array.isArray(el))) {
    arr = arr.reduce( (accum, el) => {
      if (isReverse) {
        isReverse = false;
        return accum.concat(el.reverse()); 
      } else {
        isReverse = true;
        return accum.concat(el); 
      }
    }, []);
  };
  return arr;
}
