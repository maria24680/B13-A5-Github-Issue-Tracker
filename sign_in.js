const signin=()=>{
const username=document.getElementById("username").value.trim();
console.log(username);

const pass=document.getElementById("password").value.trim();
console.log(pass);

if(username==="admin" && pass==="admin123"){
    alert("You signed in successfully");
      window.location.href = "./main.html"; 
}
else{
     alert("Username or Password incorrect ");
}


}