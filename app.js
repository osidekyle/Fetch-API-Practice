document.getElementById("getText").addEventListener('click', getText);
document.getElementById("getUsers").addEventListener('click', getUsers);
document.getElementById("getPosts").addEventListener('click', getPosts);
document.getElementById("addPost").addEventListener('submit', addPost);



function getText(){
    fetch('sample.txt')
    .then((res)=>res.text())
    .then((data)=>{
    document.querySelector("#output").innerHTML=data;
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
function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>res.json())
    .then((data)=>{
        let output = '<h2>Posts</h2>';
        data.forEach(function(post){
            output+= `
            <div>
            <h3> ${post.title} </h3>
            <p>${post.body} </p>
            </div>`
        })
        document.getElementById('output').innerHTML=output;
    })
}


function addPost(e){
    e.preventDefault();

    let title1 = document.getElementById("title").value;
    let body1 = document.getElementById("body").value;


    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:"POST",
        headers:{
            "Accept":"application/json, text/plain, */*",
            'Content-type':'application/json'
        },
        body:JSON.stringify({title:title1,body:body1})
        
    }
    )
    .then((res)=> res.json())
    .then((data)=>console.log(data))

}