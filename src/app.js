import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

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

  let list = document.getElementsByClassName("type");
  Array.from(list).forEach(element => {
    element.parentNode.removeChild(element);
  });
};
