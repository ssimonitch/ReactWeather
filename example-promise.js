// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Santa Monica', function(err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function() {
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Santa Monica').then(function(temp) {
//   console.log('Promise success', temp);
// }, function(err) {
//   console.log('Promise error', err);
// });

// Challenge Area

function addPromise(a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    }
    reject('These are not numbers');
  });
}

addPromise(5, 4).then(function(sum) {
  console.log('The sum is:', sum);
}, function(err) {
  console.log('Please enter two valid numbers.')
});
