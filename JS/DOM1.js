let singleClick=()=>{
    let boxes=document.getElementsByClassName('box')
    boxes[0].innerText='Welcome'
    boxes[1].innerHTML=`<b>hi</b>`
    boxes[1].style.cssText=`color:yellow;background:red`
    boxes[2].style.cssText=`border-radius:50%;background:blue`
}

let changeImage=()=>{
    let image=document.querySelector('img')
    image.src='./images/animal4.jpg'
}
let onoff=()=>{
    let btn=document.getElementById('btn')
    if(btn.innerText==='ON'){
        btn.innerText='OFF'
        btn.style.background='red'
    }else{
        btn.innerText='ON'
        btn.style.background='green'
    }
}

let daynight=()=>{
    let btnn=document.getElementById('btnn')
    let dn=document.querySelector('body')
    if(btnn.innerText==='DAY'){
        btnn.innerText='NIGHT'
        btnn.style.cssText=`background:white;color:black;`
        // document.body.style.background='black'
        dn.style.background='black'
    }else{
        btnn.innerText='DAY'
        btnn.style.cssText=`background:black;color:white`
        // document.body.style.background='white'
        dn.style.background='white'
    }
}