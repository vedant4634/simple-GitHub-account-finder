
let btn = document.getElementById("btn");
let user = document.getElementById("username");

// "https://api.github.com/users/dfsd/repos"

user.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
        btn.click();
    }
})
btn.addEventListener("click",()=>{
    let user = document.getElementById("username").value;
    let URL =`https://api.github.com/users/${user}`;
    
    if(user.trim() === ""){
    alert("Please enter a username");
    return;
}
    link(URL);
    btn.innerHTML="Searching.."
})

async function link(URL) {
 try{  
    let responce = await fetch(URL);
    let data = await responce.json();
    console.log(data);
    console.log(data.login);
    console.log(data.following);
    console.log(data.avatar_url);
    console.log(data.followers);
    console.log(data.repositories);
  
    let dd = document.querySelector("#profile-card");
    dd.style.display ="block"
    let p = document.querySelector("#profile-name");
    
    let img = document.querySelector("#profile-img");
    if(data.message==="Not Found"){
        img.style.display="none";
        p.innerHTML="User not found ...."
    }
    else{
        img.src = data.avatar_url;

    p.innerHTML = `User: ${data.name} <br>Login :${data.login} <br>followers : ${data.followers} <br>following :${data.following}<br> Repositories :${data.public_repos}`
    }
  
}

catch{
     p.innerHTML = "⚠️ Network Error";
        img.style.display = "none";
}    
    btn.innerHTML ="Search"
}