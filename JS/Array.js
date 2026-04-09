// // WAP to print only even numbers using for loop and result store it in result(Without using builtin method)

// let arr=[10,15,20,25,30,35]
// let resArray=[]
// for (let i=0;i<arr.length;i++){
//     if (arr[i]%2==0)
//         resArray[resArray.length]=arr[i]
// }
// console.log(resArray)

// // Odd numbers
// let arr1=[10,15,20,25,30,35]
// let res=[]
// for (let i=0;i<arr.length;i++){
//     if (arr[i]%2!=0)
//         res[res.length]=arr1[i]
// }
// console.log(res)

// let arr2=[10,15,20]
// console.log(arr2)
// //For-in loop
// console.warn('For-in loop')
// for(let key in arr2){
//     console.log(key);
// }
// // For-of loop
// console.warn('For-of loop')
// for(let key of arr2){
//     console.log(key)
// }

// console.warn('ForEach method')
// arr2.forEach((elem)=>{
//     console.log(elem)
// })
// console.warn('ForEach method')
// arr2.forEach((elem,index)=>{
//     console.log(index);
// })

// Print square numbers
//Using for loop
let arr=[7,3,5,6,1,2,8,4,9]
console.warn("for loop")
let res=[]
for (let i=0;i<arr.length;i++){
    // arr[i]=arr[i]**2
    res[res.length]=arr[i]**2
}
console.log(res)
// Using for-of
console.warn("For-of")
let res2=[]
for(let key of arr){
    res2[res2.length]=key**2
    
}
console.log(res2)

// Using Foreach
console.warn("ForEach method")
let res3=[]
arr.forEach((elem)=>{
    res3[res3.length]=elem*elem
})
console.log(res3)

// Using Map method
console.warn("Map method")
let res4=arr.map((elem)=>{
    return elem*elem
})
console.log(res4)

// Print numbers from 1 to 10
console.warn('For loop')
let resArr=[]
for (let i=1;i<=10;i++){
    resArr[resArr.length]=i
}
console.log(resArr)
// or
console.warn('For loop')
let n=[]
num=5
for(let i=1;i<=10;i++){
    n[n.length]=`${num}*${i}=${num*i}`
}
console.log(n)

console.warn('For-of loop')
let n1=[1,2,3,4,5,6,7,8,9,10]
for(let i of n1){
    console.log(`${num}*${i}=${num*i}`);
}

console.warn('ForEach loop')
n1.forEach((elem)=>{
    console.log(`${num}*${elem}=${num*elem}`);
})

console.warn('Map method')
let number=n1.map((elem)=>{
    return `${num}*${elem}=${num*elem}`
})
console.log(number)

console.warn("for loop")
let array=[4,7,6,2,5,1,9,8,3]
let ress=[]
for(let i=0;i<array.length;i++){
    if(array[i]%2==0){
        ress[ress.length]=array[i]
    }
}
console.log(ress)

console.warn("for-of loop")
let ress1=[]
for(let i of array){
    if(i%2==0)
     ress1[ress1.length]=i   
}
console.log(ress1)

console.warn("ForEach method")
let ress2=[]
array.forEach((elem)=>{
    if(elem%2==0)
        ress2[ress2.length]=elem
})
console.log(ress2)

console.warn("Map-method")
let ress3=array.map((elem)=>{
    return elem%2==0
})
console.log(ress3)

console.warn("Filter-method")
let ress4=array.filter((elem)=>{
    return elem%2==0
})
console.log(ress4)