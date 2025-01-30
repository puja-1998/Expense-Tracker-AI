const registerBtn = document.querySelector("#registerID");
const loginBtn = document.querySelector("#loginID");

let fname = document.querySelector("#fname");
let lname = document.querySelector("#lname");
let email = document.querySelector("#email");
let pass = document.querySelector("#password");
let rePass = document.querySelector("#rePassword");

registerBtn.addEventListener('click', (event)=>{
    // localStorage.setItem("firstName", fname.value);
    // localStorage.setItem("lastName", lname.value);
    // localStorage.setItem("Email", email.value);
    // localStorage.setItem("passWord", pass.value);
    if(fname.value == ""){
        alert("Please Enter First Name");
        fname.focus();
        return;
    }
    if(fname.value == ""){
        alert("Please Enter First Name");
        fname.focus();
        return;
    }
    if(lname.value == ""){
        alert("Please Enter Last Name");
        lname.focus();
        return;
    }
    if(email.value == ""){
        alert("Please Enter Your Email Id");
        email.focus();
        return;
    }
    if(pass.value == ""){
        alert("Please Enter Password");
        pass.focus();
        return;
    }
    if(rePass.value == ""){
        alert("Please  confirm Password");
        rePass.focus();
        return;
    }
    if(pass.value !== rePass.value){
        alert("Password Does Not Match");
        rePass.focus();
        return;
    }

    let user = localStorage.getItem("user");
    if(user){
        user = JSON.parse(user); //If data exists, parse it from a string into JSON or object
    }
    else{
        user = [];//if no data is found, assign an empty array []
    }

    let verify = user.some((ele)=>{
        return ele.emailId === email.value;
    });

    if(verify){
        alert("User is already exists");
        return;
    }
    else{
        let obj = {
            firstName: fname.value,
            lastName: lname.value,
            email: email.value,
            pass: pass.value,
        }

        user.push(obj);
        localStorage.setItem("user", JSON.stringify(user));
    }
    alert("User Registered successfully");
    event.preventDefault();
    window.location.href = "../index.html";

});

loginBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    window.location.href = "../index.html";
})