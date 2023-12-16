//map
let sampleArr = [2, 4, 6];

let reduced = sampleArr.reduce();
console.log(sampleArr);

//polyfil of reduce
Array.prototype.myreduce = function (callback) {
  let array = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      array.push(this[i]);
    }
  }
  return array;
};
let arr2 = sampleArr.myfilter((val) => val < 5);
console.log(arr2);

// --------------------------------------------------------------
// //polyfil of filter
// Array.prototype.myfilter = function (callback) {
//   let array = [];
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i, this)) {
//       array.push(this[i]);
//     }
//   }
//   return array;
// };
// let arr2 = sampleArr.myfilter((val) => val < 5);
// console.log(arr2);

// --------------------------------------------------------------
// //polyfil of map
// Array.prototype.mymap = function (callback) {
//   let array = [];
//   for (let i = 0; i < this.length; i++) {
//     array.push(callback(this[i], i, this));
//   }
//   return array;
// };

// let arr2 = sampleArr.mymap((val) => val * 3);
// console.log(arr2);

// sampleArr.mymap((val) => {
//   console.log(val * 2);
// });
