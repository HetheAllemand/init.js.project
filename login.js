let dbUser ="admin@myamazon.com";
let dbUser ="password";

function login(){
    let userName = prompt("Enter username");
    let password = prompt("Enter password");

    console.log(username,password);

    if(username==dbuser && password==dbuser){
        document.getElementById("login-result").innerHTML=`<h2 style=font-family:arial;"Welcome to the admin site!</h2>`;
    }else{
        document.getElementById(login-result").innerHTML=`<p class="alert-error">Invalid credentials. Please try again</p>`;
    }
}