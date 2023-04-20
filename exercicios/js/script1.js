"use strict"
let valorTotal = parseFloat(prompt("Insira o valor total da compra: "))
let parcelas = parseInt(prompt("Insira a quantidade de parcelas: "))

if (parcelas == 1){
    alert("O valor total da compra é: " + valorTotal)
} else if( parcelas == 2){
    alert("O valor total da compra é: " + valorTotal*1.03)
} else {
    alert("O valor total da compra é: " + valorTotal*1.07)
}