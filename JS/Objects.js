//Object

// //Direct Literals

// let car={
//     carname:"BMW",
//     carcolor:"Black"
// }
// console.log(car)
// console.log(typeof car)

// // Accessing property of the Object

// // dot operator
// console.log(car.carname)

// // Subscript operator
// console.log(car["carcolor"])

// //Destructing
// let person={
//     fname:'Dinga',
//     lname:'Raja',
//     age:20
// }
// //Without destructing
// console.log(`${person.fname} ${person.lname} age is ${person.age}`)

// //With destructing
// let {fname,lname,age}=person
// console.log(`${fname} ${lname} age is ${age} `)

// // Modification ---CRUD operations
// //Creating the object
// let person1={
//     name:'Dingi',
//     lstname:'Rani',
//     Age:20
// }
// console.log(person1)
 
// //Read the object
// //dot operator
// console.log(`${person1.name} age is ${person1.Age}`)

// // Using desturcting
// let {name,Age}=person1
// console.log(`${name} age is ${Age}`)

// // To add property to the object
// person1.place='Goa'
// console.log(person1)

// // To update the property of the object
// person1.Age=30
// console.log(person1)

// // To delete the property from the object
// delete person1.lstname
// console.log(person1)

// //Nested Object
// let student={
//     firstname:"Dingu",
//     lastname:"Raju",
//     address:{
//         streetNo:"#420",
//         street: "Kabab Mohalla",
//         Area: "Biriyani Nagar"
//     }
// }
// console.log(student)
// console.log(`${student.firstname} is from ${student.address.Area}`);

// let {firstname,address}=student
// let {Area}=address
// console.log(`${firstname} is from ${Area}`);

// let person2 = {
//     Fname : "Dinga",
//     Lname : "Raja",
//     dob : 1990,
//     fullname : function(){
//         console.log(`My name is ${this.Fname} ${this.Lname}`);
//     },
//     calculateAge : function(){
//         let age=2026-this.dob
//         console.log(`${this.Fname} age is ${age}`);
//     }
// }
// person2.fullname()
// person2.calculateAge()

// Using new keyword
// Date object Model
let d= new Date()
console.log(d)
console.log(typeof d);

console.log(d.getDate());
console.log(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`)

console.log(`${d.getDate()}:${d.getMonth()+1}:${d.getFullYear()}`)
console.log(d.getDay())

// Create Object using constructor function
function Car(name='',color=''){
    this.carname=name
    this.carcolor=color
}
let c1= new Car('KIA')
console.log(c1)

let c2= new Car('BMW','black')
console.log(c2)

// Important Example
function Person(fname,lname,yyyy){
    this.fname=fname
    this.lname=lname
    this.yyyy=yyyy
    this.fullname=function(){
        return (`My name is ${fname} ${lname}`)
    }
    this.calculateAge=function(){
        let d= new Date()
        let age= d.getFullYear()-this.yyyy
        return `${this.fname} age is ${age}`
    }
}
let p1=new Person('Sush','Ram',2004)
console.log(p1.fullname())
console.log(p1.calculateAge())