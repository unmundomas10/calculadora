const display = document.getElementById("display");
const botones = document.querySelectorAll(".btn");

let num1 = "";
let num2 = "";
let operacion = null;
let Limpiar = false;

function limpiarDisplay() {
  display.value = num1;
}

function numeros(number) {
  if (Limpiar) {
    num1 = "";
    Limpiar = false;
  }
  num1 += number.toString();
  limpiarDisplay();
}

function manejoOperaciones(op) {
  if (num1 === "") return;
  if (num2 !== "") {
    calcular();
  }
  operacion = op;
  num2 = num1;
  num1 = "";
}

function calcular() {
  let resultado;
  const nume2 = parseFloat(num2);
  const nume1 = parseFloat(num1);

  switch (operacion) {
    case "+":
      resultado = nume2 + nume1;
      break;
    case "-":
      resultado = nume2 - nume1;
      break;
    case "*":
      resultado = nume2 * nume1;
      break;
    case "/":
      resultado = nume2 / nume1;
      break;
    default:
      return;
  }

  num1 = resultado.toString();
  operacion = null;
  num2 = "";
  Limpiar = true;
  limpiarDisplay();
}

function borrar() {
  num1 = "";
  num2 = "";
  operacion = null;
  limpiarDisplay();
}

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const dato = boton.textContent;

    if (dato >= "0" && dato <= "9") {
      numeros(dato);
    } else if (dato === ".") {
      numeros(dato);
    } else if (dato === "C" || dato === "AC") {
      borrar();
    } else if (dato === "=") {
      calcular();
    } else if (["+", "-", "*", "/"].includes(dato)) {
      manejoOperaciones(dato);
    }
  });
});
