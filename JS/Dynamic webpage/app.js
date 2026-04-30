let fetchAPI=async()=>{
    const root = document.getElementById('root')

    let apidata=await fetch('https://api.github.com/users')
    let array=await apidata.json()
    //console.log(array);

    array.map((elem)=>{
        console.log(elem.login);
        root.innerHTML+=`
        <div class=card>
        <div><img src=${elem.avatar_url}></div>
        <div class=title> ${elem.login}</div>
        </div>`
    })
}
fetchAPI()