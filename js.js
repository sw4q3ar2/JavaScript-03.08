window.addEventListener("load", init);

function init() {
  //const myButton = document.querySelector("#myButton");
  //myButton.addEventListener("click", function () { /* névtelen függvény */
  //  console.log("A gombot megnyomták!");
  //}); /* ez a fvény csak egy memóriacím, referencia a függvényre */


  // Készítsünk egy új IMG elemet
  var imgElem = document.createElement("img");
  var divElem = document.createElement("div");
  divElem.appendChild(imgElem);
  imgElem.src = "kep/monky.jpg";

  imgElem.width = 300;
  imgElem.height = 200;

  imgElem.style.border = "1px solid black";
  document.body.appendChild(divElem);

}


