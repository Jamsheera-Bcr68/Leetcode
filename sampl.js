async function getUser(){
    let res=await fetch('https://jsonplaceholder.typicode.com/users/1')
    
    let users=await res.json()
    console.log(users);
    
}
getUser()

