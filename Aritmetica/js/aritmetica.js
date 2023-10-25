function sumar() {
    var x,y,suma,texto;
    x = document.getElementById("num1").value;
    y = document.getElementById("num2").value;

    if(isNaN(x) || isNaN(y)){
       texto = "es necesario escribir 2 numeros"
    }

    else{
        suma = parseFloat(x) + parseFloat(y);
        texto = "Resultado: " + suma;
    }
    document.getElementById("resultado").innerHTML = texto;
}

function restar() {
    var x,y,restar,texto;
    x = document.getElementById("num1").value;
    y = document.getElementById("num2").value;

    if(isNaN(x) || isNaN(y)){
       texto = "es necesario escribir 2 numeros"
    }

    else{
        restar = parseFloat(x) - parseFloat(y);
        texto = "Resultado: " + restar;
    }
    document.getElementById("resultado").innerHTML = texto;
}
function multiplicar() {
    var x,y,producto,texto;
    x = document.getElementById("num1").value;
    y = document.getElementById("num2").value;

if(isNaN(x) || isNaN(y)){
    texto = "es necesario escribir 2 numeros"
 }

 else{
     producto = parseFloat(x) * parseFloat(y);
     texto = "Resultado: " + producto;
 }
 document.getElementById("resultado").innerHTML = texto;
}

function division() {
    var x,y,cociente,texto;
    x = document.getElementById("num1").value;
    y = document.getElementById("num2").value;

if(isNaN(x) || isNaN(y)){
    texto = "es necesario escribir 2 numeros"
 }

 else{
     cociente = parseFloat(x) / parseFloat(y);
     texto = "Resultado: " + cociente;
 }
 document.getElementById("resultado").innerHTML = texto;
}