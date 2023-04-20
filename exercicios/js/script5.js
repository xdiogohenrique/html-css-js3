"use strict"
let media = parseFloat(prompt("Digite sua média: "));
if(media >= 0 && media <=10 ){ 
    if (media >= 6){
        alert("Você está aprovado");
    }else if (media < 3){
        alert("Você está reprovado");
    }else{
        alert("Exame");
    }
}else{
    alert("Nota inválida");
} 