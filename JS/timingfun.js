let fun=()=>{
    console.log('hello')
}

let num=1
let fun1=()=>{
    console.log(num++)
}

let reset=()=>{
    num=1
}

let timer=()=>{
    let value=1;
    let val=setInterval(()=>{
        console.log(value++);
    },1000)
    setTimeout(() => {
        clearInterval(val)
        console.log("Time UP")
    }, 10000);
}

let timer1=()=>{
    let value=10;
    let val=setInterval(()=>{
        console.log(value--);
    },1000)
    setTimeout(() => {
        clearInterval(val)
        console.log("Time UP")
    }, 10000);
}
