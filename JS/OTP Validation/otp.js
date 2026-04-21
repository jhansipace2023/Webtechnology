let otp;
let generateOTP=()=>{
    let display=document.getElementById('display')
    let randomNum=Math.random()*10000
    otp=Math.floor(randomNum);
    (otp>=1000)?display.innerText=otp:generateOTP()
}


let validation=()=>{
    let input=document.querySelector('input')
    let verify=document.querySelector('#verify')
    if (input.value==otp){
        verify.innerText='Verification Successful'
        verify.style.color='green'
    }else{
        verify.innerText='Invalid OTP'
        verify.style.color='red'
    }
}