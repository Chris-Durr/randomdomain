let primera = ["el", "una", "cinco", "sin"];
let segunda = ["retorno", "casa", "pajaros", "ningun"];
let tercera = ["delrey", "encantada", "volando", "sentido"];
let body = document.querySelector("body");

for (let a = 0; a < primera.length; a++) {
  for (let b = 0; b < segunda.length; b++) {
    for (let c = 0; c < tercera.length; c++) {
      {
        body.innerHTML +=
          "<h3> www." + primera[a] + segunda[b] + tercera[c] + ".es <br></h>";
      }
    }
  }
}
