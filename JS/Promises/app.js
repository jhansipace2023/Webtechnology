// // Promises
// let p=new Promise((res,rej)=>{
//     if(true){
//         res("I'm Selected")
//     }else{
//         rej("I'm Rejected")
//     }
// })
// p.then((data)=>{
//     console.log(data);
// })
// p.catch((err)=>{
//     console.log(err);
// })
// p.finally(()=>{
//     console.log("Task is completed")
// })

// Example using delay
// let maintask=()=>{
//     let time=1
//     setInterval(()=>{
//         console.log(time++);
//     },1000)
// }
// setTimeout(()=>{
//     console.log('Start');
// },5000)
// setTimeout(()=>{
//     console.log('Execute');
// },3000)
// setTimeout(()=>{
//     console.log('End');
// },2000)
// maintask()

// Callback Hell
let cbHell=()=>{
    let time=1
    setInterval(()=>{
        console.log(time++);
    },1000)
    setTimeout(()=>{
        console.log('Start');
        setTimeout(()=>{
            console.log('Execute');
            setTimeout(()=>{
                console.log('End');
            },2000)
        },3000)
    },5000)
}
// cbHell()

// Example for async
let fun=async()=>{
    return 'Hello'
}
let promise=fun()
// console.log(promise)
// promise.then(data=>console.log(data))

// Example for async and await with promises
let task=()=>{
    
    let promise=new Promise((res)=>{
        setTimeout(()=>{
            res('Execute')
        },5000)
    })
    return promise
}
let mainFun=async()=>{
    console.log("Start");
    console.log(await task());
    console.log("End");
}
mainFun()