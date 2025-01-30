const loginbtn = document.querySelector("#loginBtn");
const signUpBtn = document.querySelector("#signUpBtn");

let email = document.querySelector("#loginEmail");
let password = document.querySelector("#loginPassword");
// Login page
loginbtn.addEventListener('click',(event)=>{
  let data = JSON.parse(localStorage.getItem("user"));
  if(!data){
    alert("Please Registered First");
    return;
  }
//   else{
//     alert("Logged In successfully");
//     event.preventDefault();
//     window.location.href = "./home.html";
//   }

let flag = true;
data.some(user=>{
    if(user.email == email.value && user.pass == password.value){
        alert("Logged In successfully");
        event.preventDefault();
        window.location.href = "./src/home.html";
        flag = false;
        return;
    }
});
if(flag){
    alert("Enter Valid Email And Password");
}

  
});
signUpBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    window.location.href = "./src/signUp.html";
});