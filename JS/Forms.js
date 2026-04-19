let handleInput=(e)=>{
    e.preventDefault()
    let printname=document.getElementById('printname')

    let fname=e.target[0].value
    let lname=e.target[1].value
    let dob=e.target[2].value
    let d=new Date()
    let age=d.getFullYear()-dob.slice(0,4)
    let place=e.target[3].value
    printname.innerText=`My name is ${fname} ${lname} & age is ${age}`
    
}



let validation=(e)=>{
    e.preventDefault()
    let err=document.querySelector('.err')
    let emailfield = e.target[0]

    if (emailfield.value === ""|| emailfield.value===null){
        emailfield.style.border=`solid 2px red`
        err.innerHTML=`Email field is empty`
    }else{
        alert('welcome')
    }
}


let login1=(e)=>{
    e.preventDefault()
    // let err=document.querySelector('.err')
    let lognn=document.querySelector('.lognn')
    let credentials={
        email : "admin@gmail.com",
        password : "admin123"
    }
    let {email,password}=credentials

    let emailfield1=e.target[0]
    let pswdfield=e.target[1]

    if (emailfield1.value===email){
        if(pswdfield.value===password){
            window.location.href='./welcome.html'
            // lognn.innerHTML=`welcome`
        }else{
            lognn.innerHTML=`password is invalid`
        }
    }else{
        lognn.innerHTML=`Email is invalid`
    }
}