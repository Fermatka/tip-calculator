let currentPercent = 0;
let tip = "0";

const inputBill = document.getElementById("bill-amount");
const inputPeople = document.getElementById("people-count");
const btnReset = document.querySelector(".reset-btn");
const btnCalculate = document.getElementById("calculate");
let billAmount;
let numPeople;

function disabledButtonReset() {
  billAmount = Number(inputBill.value);
  numPeople = Number(inputPeople.value);
  // console.log(billAmount);
  // console.log(numPeople);

  if (billAmount === 0 && numPeople === 0) {
    btnReset.setAttribute("disabled", "");
  } else {
    btnReset.removeAttribute("disabled");
  }
  if (billAmount != 0 && numPeople != 0) {
    btnCalculate.removeAttribute("disabled");
  } else {
    btnCalculate.setAttribute("disabled", "");
  }
}

inputBill.addEventListener("change", disabledButtonReset);

inputPeople.addEventListener("change", disabledButtonReset);

function visualiseButton(percent) {
  document.getElementById("b5").style.backgroundColor = "var(--Very-dark-cyan)";

  document.getElementById("b10").style.backgroundColor =
    "var(--Very-dark-cyan)";

  document.getElementById("b15").style.backgroundColor =
    "var(--Very-dark-cyan)"; //jak ustawić od razu wszystkim trzem- w każym jest to samo przecież

  if (percent === 0.05) {
    document.getElementById("b5").style.backgroundColor =
      "var(--Dark-grayish-cyan-2)";
  } else if (percent === 0.1) {
    document.getElementById("b10").style.backgroundColor =
      "var(--Dark-grayish-cyan-2)";
  } else if (percent === 0.15) {
    document.getElementById("b15").style.backgroundColor =
      "var(--Dark-grayish-cyan-2)";
  }
}
// czy poniższe 3 funkcje da się zapisać jako jedną?
function setCurrentPercent5() {
  currentPercent = 0.05; // czy zachowana jest czystość kodu??
  visualiseButton(currentPercent);
}

function setCurrentPercent10() {
  currentPercent = 0.1;
  visualiseButton(currentPercent);
}

function setCurrentPercent15() {
  currentPercent = 0.15;
  visualiseButton(currentPercent);
}

function reset() {
  document.getElementById("bill-amount").value = "0";
  document.getElementById("people-count").value = "0";
  document.querySelector(".show-tip").innerText = "$0.00";
  document.querySelector(".show-total").innerText = "$0.00";
  currentPercent = 0;
  visualiseButton(currentPercent);
  disabledButtonReset();
}

function calculate() {
  let tipPercent = currentPercent;
  let tip = tipPercent * document.getElementById("bill-amount").value;
  console.log("tip");

  let tipPerPerson = tip / document.getElementById("people-count").value;
  console.log(tipPerPerson);

  let BillPerPerson =
    document.getElementById("bill-amount").value /
    document.getElementById("people-count").value;

  console.log(BillPerPerson);

  document.querySelector(".show-tip").innerText = "$" + tipPerPerson;
  document.querySelector(".show-total").innerText = "$" + BillPerPerson;
}
//czy da się te trzy query elektory jakoś połączyć?
document.querySelector("#b5").addEventListener("click", setCurrentPercent5);

document.querySelector("#b10").addEventListener("click", setCurrentPercent10);

document.querySelector("#b15").addEventListener("click", setCurrentPercent15);

document.querySelector(".reset-btn").addEventListener("click", reset);
document.querySelector(".calculate-btn").addEventListener("click", calculate);

visualiseButton(currentPercent);
reset();
