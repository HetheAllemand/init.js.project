// console.log("Script2");
// let userName= prompt("Enter your name");
// let email= prompt("Enter email address");
// let userPassword= prompt("Enter your password");
// let age= prompt("Enter age");
// let country= prompt("Country of origin");
// let monthlySalary= prompt("Enter monthly salary");
// console.log(`${userName} ${email} ${monthlySalary*12} (annual)`);
// document.write(`
// <p>User: ${userName} </p>
// <p>Email: ${email} </p>
// <p>Salary: ${monthlySalary*12} </p>
// `)

//function declaration
// function greeting(){
//     console.log("Hello");
//     alert("Hello");
//     document.write("Hello");
//     return "Hethe";
// }

// function sum(){
//     return 10+10;
// }

// console.log(sum());

// let global;

// function sum(a,b){
//     global="affected";
//     return a+b;
// }

// console.log(sum (10,50));
// console.log(global);

// let displayVlaues = function(){
//     console.log("Displaying values...")

//     displayValues();
// }

// //arrow function
// let traveling = country => "Traveling to ..." + country;

// travel = traveling(Italy);
// console.log(travel);

let total= 0;

function addCart(price){
    total = total + price;
    console.log(total);
    return total;
}
function calculateTaxes(){
    subtotal=addCart(24.87);

    let totalTax = subtotal *1.42;

document.getElementById("receipt").
innerHTML=
    `<p>Subtotal = ${subtotal}</p>
    <p> Total = ${totalTax}</p>`
}