import fizzbuzz_cadena from "./fizzbuzz_cadena";

const num = document.querySelector("#numero");
const form = document.querySelector("#fizzbuzz-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML = "<p>" + fizzbuzz_cadena(num.value) + "</p>";
});
