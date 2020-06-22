document.getElementById("getText").addEventListener('click', getText);
document.getElementById("getUsers").addEventListener('click', getUsers);



function getText(){
    fetch('sample.txt')
    .then((res)=>res.text())
    .then((data)=>{
    document.querySelector(".output").innerHTML=data;
    })
    .catch((error)=>console.log(error))
};


function getUsers(){
    fetch('users.json')
    .then((res)=>res.json())
    .then((data)=>{
        let output = '<h2>Users</h2>';
        data.forEach(function(user){
            output+= `
            <ul>
            <li>ID:${user.id} </li>
            <li>Name:${user.name} </li>
            <li>Email:${user.email} </li>
            </ul>`
        })
        document.getElementById('output').innerHTML=output;
    })
}
