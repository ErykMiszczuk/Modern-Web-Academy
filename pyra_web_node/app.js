// let x = undefined;
// console.log(typeof x)
// x = 2;
// console.log(typeof x);
// x = `siema`;
// console.log(typeof x);
// x = true;
// console.log(typeof x);
// x = new Object();
// console.log(typeof x);
// x = new Array();
// console.log(typeof x);
// x = [`1`,`2`,`3`];
// console.log(typeof x);

// function greetings() {
//   console.log(`Cześć!`);
// }

// function greetings2(name) {
//   console.log(`Cześć ${name}!`);
// }

// greetings();
// greetings2('Eryk');

// let pies = {
//   'l_nog': 4
// }

// class Pies {
//   constructor(name, age, numoflegs) {
//     this.name = name;
//     this.age = age;
//     this.numoflegs = numoflegs;
//   }
// }

// let Bolek = new Pies('Bolek', 1, 4);

// console.log(Bolek);

// var num = 2;
// var str = "2";

// console.log(num == str);
// console.log(num === str);

// var arr = [1,2,3,4,5];
// var arr_str = '1,2,3,4,5';

// console.log(arr == arr_str);

// var obj = {};

// if(obj != null) {
//   console.log('obj istnieje');
// }

// var arr1 = [10,2];
// var arr2 = [1,2,3];

// console.log(arr1 > arr2);

// var arr = [1,20,32,42,5,666,7,8,9000];

// for (var i = 0; i < 10; i++) {
//   if(arr[i] === 20) {
//     console.log(arr[i]);
//     console.log(i);
//     break;
//   }
//   console.log(i);
// }

// var index = 0;
// while(arr[index] !== 20) {
//   index++;
// }

function caopyArray(tablica) {
  var nowaTablica = [];
  for (var i = 0; i < tablica.length; i++) {
    nowaTablica.push(tablica[i]);
  }
  return nowaTablica;
}

var arr1 = [1,2,3,4, `siema`];
var arr2 = arr1;
var arr3 = arr1.map((x) => {return x;})
arr2[4] = 3;

console.log(arr1);
console.log(arr2);
console.log(arr3);

var tablica = [1,2];
for (var i = 1; i < tablica.length; i++){
  tablica[i]++;
}

tablica.forEach((el) => {
  el += 'nowa wartość';
});

console.log(tablica);

var y = [1,2,10,12,1,10,4,9];
var newTable = [];
newTable = y.filter((el) => {
  return el > 8;
});

console.log(newTable);