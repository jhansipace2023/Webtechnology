let fun = () =>{
    console.log("Single Click😉")
}

let fun2 = () => {
    console.log("Double Click😊")
}

let alertmsg=()=>{
    alert("Be Careful")
}

let printname=()=>{
    let user=prompt("Enter Name")
    alert(user);
}

let takeconfirm=()=>{
    let bool=confirm("Ready for mock..!")
    bool?alert('Welcome'):alert('Moye Moye')
}