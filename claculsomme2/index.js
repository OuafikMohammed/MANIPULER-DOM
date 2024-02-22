// let CalculeClick = function(e){
//     e.preventDefault();
//     console.log("You clicked me !");
// }
// fonctions anonymes se sont des fonctions avec "function"
// fonctions fléchées se sont des fonctions avec =  et > mis sans utiliser "function"

let CalculeClick = (e) => {
    e.preventDefault();
    let n1 = Number(document.querySelector(".num1").value);
    let n2 = Number(document.querySelector(".num2").value)
    document.querySelector(".somme").textContent = n1 + n2 
}   
  
document.querySelector(".btn-calculer").addEventListener("click",CalculeClick)

let vInput = document.querySelectorAll("input");

for (let i = 0 ; i <= vInput.length-1 ; i++){
    vInput[i].style.backgroundColor = "red";
    vInput[i].style.color="white";
}
console.log(vInput[1]);
console.log(vInput.length);

// ----------------------------------------------

// document.querySelector(".btn-calculer").style.border = "solid 2px aqua";
// document.querySelector(".btn-calculer").style.marginTop = "20px" ;
// document.querySelector(".btn-calculer").style.width="150 px";
document.querySelector(".btn-calculer").style.backgroundColor = "aquamarine"

// ---------------getElementById---------------

let titre = document.getElementById("dd105");
titre.textContent="Réseaux";
titre.style.color="red";
titre.style.backgroundColor="black";
titre.style.display="flex";
titre.style.justifyContent="center";
titre.style.borderRadius="20px"

//--------------getElementByClassName----------

console.log(document.getElementsByClassName("digital"));

let vDigital = document.getElementsByClassName("digital");

for (let i = 0; i <=vDigital.length-1;i++){
    vDigital[i].style.border="solid 2px green"
}

document.getElementsByClassName("digital")[1].style.backgroundColor="aqua";
//------------getElementsByTagName---------------------

console.log(document.getElementsByTagName("button"));
let vButton =  document.getElementsByTagName("button")
for (let i = 0 ; i <= vButton.length-1; i++) {
    document.getElementsByTagName("button")[i].style.borderRadius = "20px";
}