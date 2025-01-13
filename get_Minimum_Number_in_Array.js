// i solved the problem from my experience of programming without using JavaScript's built-in features.

let arr = [12, 5, 6, -7, -1, 3.1];
let min = Infinity;
function findMin() {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

console.log(findMin());

