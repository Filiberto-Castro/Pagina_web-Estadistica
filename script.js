let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

var divTexto = document.getElementById("texto-animado");
var textoCompleto = "Conoceréis la verdad y la verdad os hará libres";

var contador = 0;
var textoMostrado = "";

function mostrarTexto() {
  if (contador < textoCompleto.length) {
    var siguienteCaracter = textoCompleto.charAt(contador);
    
    textoMostrado += siguienteCaracter;
    
    divTexto.innerHTML = textoMostrado;
    
    contador++;
    
    setTimeout(mostrarTexto, 100);
  }
}

mostrarTexto();
