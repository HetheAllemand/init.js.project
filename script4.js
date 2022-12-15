let gpas = [2.2,3,1.2,3.3,4,3.5,1.5];
console.log(gpas);
console.table(gpas);

function register(){
    let newGPA= Number(document.getElementById("gpa-input").value); // getting the newGPa from the input
    gpas.push(newGPA); // adding the newGPA to the array
    displayGPAS(); // display the newGPA
 }
 

function displayGPAS(){
    const DIV = document.getElementById("users-gpas");
    let tmp="";
    for(let i=0;i<gpas.length;i++){
        
        if(gpas[i]<2){
            tmp+=`
            <p style="color:red;">ID ${i} --> ${gpas[i]} Fail</p>
            `;
        }else if(gpas[i]>=3.5){
            tmp+=`
            <p style="color:green;">ID ${i} --> ${gpas[i]} :)</p>
            `;
        }else{
            tmp+=`
            <p>ID ${i} --> ${gpas[i]}</p>
            `;
        }
        
    document.getElementById("users-gpas").innerHTML=tmp;
    DIV.innerHTML=tmp;
    }
}
displayGPAS();