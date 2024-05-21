import "./style.css";

// obtengo los datos del ejercicio y los guardo en variables
let totalCena = 120;
let totalBebidas = 18;
let numeroAmigos = 6;

// resto = totalCena - totalBebidas para obtener el costo de la cena
let costo = totalCena - totalBebidas;

// calculo del costo de la cena por persona 
let costoPax = costo / numeroAmigos;

console.log("El dinero que tiene que pagar por persona es: ", costoPax);

// Verifico si existe el elemento con la clase "cena" y actualiza su contenido
let cenaElement = document.querySelector(".cena");
if (cenaElement) {
    cenaElement.innerHTML = `El dinero que tiene que pagar por persona es: ${costoPax} €`;
}
