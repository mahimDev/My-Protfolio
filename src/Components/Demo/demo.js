let arr = [1, 13, 6, 4, 12];
// let min = Math.min(...arr);
// let max = Math.max(...arr);
let new_arr = arr.sort((a, b) => {
  return a - b;
});

let sum = 0;
for (let i = 0; i < new_arr.length; i++) {
  sum += arr[i];
  console.log(sum);
}

let mn = sum - new_arr[new_arr.length - 1];
let mx = sum - new_arr[0];
console.log(mn, mx);
