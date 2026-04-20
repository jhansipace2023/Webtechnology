let generateOTP=()=>{
    let display=document.getElementById('display')
    let randomNum=Math.random()*10000
    let otp=Math.floor(randomNum);
    (otp>=1000)?display.innerText=otp:generateOTP()
}