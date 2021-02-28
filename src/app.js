/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let simboloGenerated = Math.floor(Math.random() * 4);
  let numberGenerated = Math.floor(Math.random() * 14);

  let simbolos = ["♥", "♣", "♦", "♠"];
  let numeros = [
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

  let newSimbolo = document.getElementById("simbolo");
  let newSimboloInvertido = document.getElementById("simboloInvertido");
  let newNumber = document.getElementById("numero");

  newSimbolo.innerHTML = simbolos[simboloGenerated];
  newSimboloInvertido.innerHTML = simbolos[simboloGenerated];
  newNumber.innerHTML = numberGenerated;
  if (simboloGenerated === 0 || simboloGenerated === 1) {
    newSimbolo.style.color = "red";
    newSimboloInvertido.style.color = "red";
  }
};
