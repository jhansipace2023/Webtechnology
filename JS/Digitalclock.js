let digitalClock=()=>{
    let elem=document.getElementsByTagName('h2')
    let dateObj=new Date()

    let curDate=dateObj.toLocaleDateString()
    let curTime=dateObj.toLocaleTimeString()

    elem[0].innerText=curTime
    elem[1].innerText=curDate

    let curDay=dateObj.getDay()
    switch(curDay){
        case 1:elem[2].innerText='Monday'
        break;
        case 2:elem[2].innerText='Tuesday'
        break;
        case 3:elem[3].innerText='Wednesday'
        break;
        case 4:elem[3].innerText='Thursday'
        break;
        case 5:elem[3].innerText='Friday'
        break;
        case 6:elem[3].innerText='Saturday'
        break;
        case 7:elem[3].innerText='Sunday'
        break;
    }
}
// setInterval(digitalClock,1000)