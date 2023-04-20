"use strict"
window.onload = function(){
    document.getElementById("btn").onclick = function(){
        calcular();
    }
};

function calcular() {
        var base = parseFloat(document.getElementById("base").value);
        var altura = parseInt (document.getElementById("altura").value);
        var area = base*altura;

        document.getElementById("area").value = area;
        
    }
    



