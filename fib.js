function fibs(n) {
  let array = [];

  for (let i = 0; i < n; i++) {
    if (i < 2) {
      array.push(i);
    } else {
      array.push(array[i - 1] + array[i - 2]);
    }
  }

  return array;
}

function fibsRec(n) {
  if (n == 1) return [0];
  if (n == 2) return [0, 1];

  const array = fibsRec(n - 1);
 
  return [...array, array[n - 2] + array[n - 3]];
  
}

console.log(fibs(8));
console.log(fibsRec(10));