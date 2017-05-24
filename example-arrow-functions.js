let names = ['Andrew', 'Julie', 'Jen'];
//
// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('forEach', name);
// });
//
// names.forEach(name => console.log(name));

// let returnMe = (name) => name + '!';
// console.log(returnMe('Steven'));

// let person1 = {
//   name: 'Andrew',
//   greet: function() {
//     names.forEach(function(name) {
//       console.log(this.name + ' says hi to ' + name);
//     })
//   }
// };
//
// person1.greet();
//
// let person2 = {
//   name: 'Andrew',
//   greet: function() {
//     names.forEach( name => console.log(`${this.name} says hi to ${name}`))
//   }
// }
//
// person2.greet();

// function add(a, b) {
//   return a + b;
// }

let addStatement = (a, b) => a + b;

console.log(addStatement(1, 3));
console.log(addStatement(9, 0));
