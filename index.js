function processLogin(){
    event.preventDefault()
    let authorised_users = [{name:'Yaeger024', pass:'aot'}, {name: 'Excalibur', pass:'evLA55'}]
    let username=document.getElementById("username").value
    let password=document.getElementById("password").value
    authorised=false
    index=0
    for(let i=0;i<authorised_users.length;i++){
        if(authorised_users[index].name==username){
            if(authorised_users[index].pass==password){
                authorised=true
                break
            }
            else {
                index++
            }
        }
        else{
            index++
        }
    }
    console.log(username)
    console.log(password)
    console.log(authorised)
    if(authorised){
        alert("Logged in")
    }
    else{
        alert("Credentials are wrong")
    }
}
function pageLoad(){
    document.getElementById("login").addEventListener("submit", processLogin)
}