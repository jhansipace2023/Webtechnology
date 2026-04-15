let changeContent=()=>{
    let elem=document.getElementById('head')
    elem.innerText='I love Javascript'
    elem.style.color = 'pink'
    elem.style.background='grey'
}
let applycolors=()=>{
    let elem=document.getElementsByTagName('h2')
    elem[0].style.background='orange'
    elem[1].style.color='blue'
    // elem[2].style.background='green'
    // elem[2].style.color='white'
    elem[2].style.cssText=`background:green;color:white`
}

console.log(document.getElementsByClassName('abc'))

console.log(document.getElementsByName('fname'))

console.log(document.getElementsByTagName('h2')[0])

console.log(document.querySelector('.abc'))

console.log(document.querySelectorAll('.abc')[1])