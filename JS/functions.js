console.log("General function")

// Function without parameter & without return statements
function fun(){
    console.log("Hello")
}
// fun()
// console.log(typeof fun);

function add(){
    let a=100
    let b=200
    let sum=a+b
    console.log(sum);
}
// add()
// add()

// function with parameter and without return statement
function printName(fname){
    console.log("Hello "+fname)
}
// printName('Sush')
// printName('Usha')

function printNames(fname,lname){
    console.log(`Hello ${fname} ${lname}`);
}
// printNames('Sush','Dove')
// printNames('Usha','Rani')

function add2num(num1,num2){
    let res=num1+num2
    console.log(`${num1} + ${num2} = ${res}`);
}
// add2num(100,1000)
// add2num(25,95)

//WAP to print only even numbers from start to end using general function with parameters
function even(start,end){
    console.warn(`Even numbers from ${start}-${end}`)
    if (start<end){
        for(let i=start;i<=end;i++){
        if(i%2==0)
        console.log(i);
    } 
    }else {
        console.error('Inavlid Range')
    }
}

// even(1,10)
// even(20,50)
// even(10,5)

function evennum(start,end){
    console.warn(`Even numbers from ${start}-${end}`)
    if (typeof start ==='number' && typeof end ==="number"){
        if (start<end){
        for(let i=start;i<=end;i++){
        if(i%2==0)
        console.log(i);
    } 
    }else {
        console.error('Inavlid Range')
    }
    }else{
        console.error("It is not a number")
    }
}
// evennum('a','b')

//WAP to print only odd numbers from start to end using general function with parameters

function oddnum(start,end){
    console.warn(`Odd numbers from ${start}-${end}`)
    if (typeof start === "number" &&  typeof end==="number"){
        if(start<end){
            for(let i=start;i<=end;i++){
                if(i%2!=0)
                    console.log(i)
            }
        }else{
            console.error("Invalid Range")
        }
    }else{
        console.error("It is not a number")
    }
}
// oddnum(20,30)
// oddnum('a','b')
// oddnum(60,40)

// changing the default value of parameter

function demo(a=0){
    console.log(a);
}
// demo()
// demo(100)
// demo()

function sum(a=0,b=0){
    let res=a+b
    console.log(`${a} + ${b} = ${res}`);
}
// sum()
// sum(10,20)
//without default and values
function sum(a,b){
    let res=a+b
    console.log(`${a} + ${b} = ${res}`);
}
// sum()

//Function without parameters and with return statements
function fun2(){
    let a=100
    let b=200
    let sum=a+b
    console.log(sum);

    return `${a} + ${b} = ${sum}`
}
// let res=fun2()
// console.log(res);

//Function with parameter and with return statement
function myname(fname='',lname=''){
    return(`Hello ${fname} ${lname}`);
}
// let n1=myname("Sush","RK")
// console.log(n1) //Hello Sush RK

// console.log(myname('Shree'))

//WAP to check given number is even or odd using general function with parameter and return statement
function evenodd(num){
    if(num%2==0)
        return(`even`)
    else
        return(`odd`)
}
// let n5=evenodd(2)
// console.log(n5)
// console.log(evenodd(25))

//OR
function checkevenodd(num=Number()){
    return (num%2==0) ? 'even': 'odd'
}
// let r=checkevenodd(20)
// console.log(r)

// Anonymous functions
console.warn("Anonymous Function")
// Function without parameter & without return statements
let f=function(){
    console.log('Hello')
}
// f()

// function with parameter and without return statement
let f1=function(fname){
    console.log("Hello "+fname)
}
// f1('sush')

// Function without parameters and with return statements
let f2=function(){
    fname='sush'
    return fname
}
// let r=f2()
// console.log(r)

//Function with parameter and with return statement
let f3=function(fname){
    return fname
}
// console.log(f3('sush'))

//Arrow function
console.warn("Arrow Function")
// Function without parameter & without return statements
let a1=()=>{
    let a=10
    let b=5
    let res=a+b
    console.log(res)
}
// a1()

// function with parameter and without return statement
let a2=(a,b)=>{
    console.log(a+b)
}
// a2(10,20)

// Function without parameters and with return statements
let a3=()=>{
    let a=10
    return a
}
// let r1=a3()
// console.log(r1)

//Function with parameter and with return statement
let a4=(a,b)=>{
    let res=a+b
    return(`${a}+${b}=${res}`)
}
// let sum1=a4(10,50)
// console.log(sum1)

//Self Invoking Function
console.warn("Self Invoking")
let x=(function(a,b){
    let sum=a+b
    return `${a}+${b}=${sum}`
})(10,20)
console.log(x)

//Callback Function
console.warn("CallBack")
let num=()=>{
    return 300
}
let sum1=(a,b)=>{
    let res=a+b
    console.log(res)
}
sum1(num(),200)

//OR
let num1=()=>{
    return 300
}
let sum2=(a,b)=>{
    let res=a()+b
    console.log(res)
}
sum2(num1,200)

let sum3=(a,b)=>{  //This sum3 is called Higher order function and a is callback function
    let res=a()+b
    console.log(res)
}
sum3(()=>{
    return 200
},200)