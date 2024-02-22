
let n1 = Number(document.querySelector(".num1").value);
let n2 = Number(document.querySelector(".num2").value);

let somme = n1 + n2 ;
document.querySelector(".resultat").value = somme;
if (somme > 20 ) {
    document.querySelector(".resultat").style.backgroundColor = "red"
}
else {
    document.querySelector(".resultat").style.backgroundColor = "green"
}
document.querySelector(".btn-calculer").addEventListener("click",CalculeClick)

let vInput = document.querySelectorAll("input");

for (let i = 0 ; i <=vInput.length-1 ; i++){
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