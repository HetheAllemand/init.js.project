console.log("script file");
var age=100; //initialization and assignation
let userName= "Mike";
let taxes= 11.5;
const URL= "http:www.PrivateEndPoint.com/project";

console.log(age,userName,URL); //displaying the age, userName, and URL

userName= "Edward";
taxes= 12;
console.log("my user is" + userName + "in" + URL); //displaying the userName and URL

// let numberChildren= 3;
// let partnerName= "Beyonce";
// let geoLocation= "BallerLand";
// let jobTitle= "Developer";

//console.log(numberChildren,partnerName,geoLocation,jobTitle);

//template string
//document.write(`<p>You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numberChildren + 1} kids</p>`);

//assignment 1 template script with variables 

let jobTitle= "Amazon";
let entertainment= "movies";
let sub= "jenre";
let number= "unlimited";
let category= "comedy" + "drama" + "horror" + "documentary" + "series";
let actor= "celebrity";
let payment= "subcription";
let difPayment= "onDemand";
let credit= "Visa" + "MasterCard" + "DebitCard" + "GiftCard" + "PayPal";

console.log(jobTitle,entertainment,sub,number,category,actor,payment,difPayment,credit);

document.write(`<h2>Welcome to ${jobTitle}.</h2> <p>We offer ${entertainment} of almost any ${sub} with ${number} ${category} or any ${entertainment} of your choice.</p> <p> Your favorite ${actor} and movie is ${difPayment} with either ${payment} based watching or ${difPayment}. Easy to access, ${credit} is accepted. Enjoy!</p>`);