import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function CardGenerator() {
    let type = ["type-heart", "type-spades", "type-diamond", "type-clubs"];
    let number = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];

    function random(arr) {
      return Math.floor(Math.random() * arr.length);
    }

    // Generar clase

    let claseCarta = type[random(type)];

    // Generar palo-carta

    let palo =
      claseCarta === "type-heart" || claseCarta === "type-diamond"
        ? ["♦", "♥"]
        : ["♠", "♣"];

    let paloCarta = palo[random(palo)];

    // Generar numero carta

    let cardNumber = number[random(number)];

    // Modificar Div

    let list = document.getElementsByClassName("type");
    Array.from(list).forEach(element => {
      element.className = `type ${claseCarta}`;
      element.innerHTML = `<h1>${paloCarta}</h1>`;
    });

    let numberElement = document.getElementById("number");
    numberElement.innerHTML = cardNumber;
  }

  CardGenerator();

  //Boton generar carta

  let boton = document.getElementById("boton");

  boton.addEventListener("click", () => {
    CardGenerator();
  });

  //Boton Intervalo

  let botonTiempo = document.getElementById("botonTemp");
  let intervalo = null;

  botonTiempo.addEventListener("click", () => {
    clearInterval(intervalo);

    let tiempo = document.getElementById("inputTiempo").value;
    tiempo = parseInt(tiempo) * 1000;

    CardGenerator();

    intervalo = setInterval(CardGenerator, tiempo);

    document.getElementById("inputTiempo").value = "";
  });

  let botonSize = document.getElementById("botonSize");

  botonSize.addEventListener("click", () => {
    let valorHeight = document.getElementById("inputHeight").value;
    if (valorHeight <= 450) {
      alert("Height tiene que ser completado y ser mayor a 450px!");
      return;
    }

    let carta = document.getElementById("carta");
    carta.style.height = `${valorHeight}px`;

    let valorWidth = document.getElementById("inputWidth").value;

    if (valorWidth < 90) {
      alert("Width tiene que ser completado y ser mayor a 90px");
      return;
    }

    carta.style.width = `${valorWidth}px`;
  });
};
