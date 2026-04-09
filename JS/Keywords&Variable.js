console.warn('var keyword')
var a;   //?dec
a=100;   //?init
console.log(a);

a='hello';   //re-init
console.log(a);

var a;    //re-dec
a=true;   //re-init
console.log(a)

console.warn('let keyword')
let b;     //dec
b=200;     //init 
console.log(b);

// let b;  //re-dec is not possible
b=false;    //re-init
console.log(b)

console.warn('const keyword')
const c=300     //dec and init
console.log(c)

// const c=420;     //re-dec and re-init is not possible
console.log(c);