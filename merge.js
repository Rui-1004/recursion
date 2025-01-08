function mergeSort(arr) {
  let newArr;
  if (arr.length == 1) return arr;

  newArr = arr.splice(Math.floor(arr.length / 2));

  let left = mergeSort(newArr);
  let right = mergeSort(arr);

  return merge(left, right);
}

function merge(left, right) {
  let sortedArray = [];
  let num = null;
  let num2 = null;

  let maxLength = left.length + right.length;

  while (sortedArray.length < maxLength) {
    if (num == null) num = right.shift();
    if (num2 == null) num2 = left.shift();

    if (num > num2 || num == undefined) {
      sortedArray.push(num2);
      num2 = null;
    }
    else {
      sortedArray.push(num);
      num = null;
    }
  }
  return sortedArray;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));