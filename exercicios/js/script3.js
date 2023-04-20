"use strict"
let numeroUm = parseInt(prompt("Insira o primeiro número: "))
let numeroDois = parseInt(prompt("Insira o segundo número: "))
if (numeroUm > numeroDois){
    alert("O maior número digitado foi: " + numeroUm)
} else if(numeroDois > numeroUm){
    alert("O maior número digitado foi: " + numeroDois)
} else if(numeroUm == numeroDois){
    alert("Os valores são iguais")
}
