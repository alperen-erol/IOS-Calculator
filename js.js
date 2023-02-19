const numberbuttons = document.getElementsByClassName("visible");
const display = document.getElementById("display");
const result = document.getElementById("result");
const process = document.getElementsByClassName("process");
const equals = document.getElementsByClassName("equals")[0];
const clean = document.getElementsByClassName("ac")[0];
const percent = document.getElementsByClassName("percent")[0];
const plusminus = document.getElementsByClassName("plusminus")[0];
const backspace = document.getElementById('backspace')
backspace.addEventListener('click',(e)=>{
  display.innerHTML=display.innerHTML.slice(0,-1)
})
clean.addEventListener("click", (e) => {
  window.location.reload();
});
let islem = "",
  percentvalue = 0;
Array.from(numberbuttons).forEach((element) => {
  element.addEventListener("click", (e) => {
    display.innerHTML += e.target.innerHTML;
  });
});
Array.from(process).forEach((element) => {
  element.addEventListener("click", (e) => {
    result.innerHTML += display.innerHTML + "  " + e.target.innerHTML;
    display.innerHTML = "";
    islem = e.target.innerHTML;
  });
});
percent.addEventListener("click", (e) => {
  percentvalue = 1;
});
equals.addEventListener("click", (e) => {
  if (islem == "+") {
    result.innerHTML =
      parseFloat(result.innerHTML) + parseFloat(display.innerHTML);
  } else if (islem == "-") {
    result.innerHTML =
      parseFloat(result.innerHTML) - parseFloat(display.innerHTML);
  } else if (islem == "x") {
    result.innerHTML =
      parseFloat(result.innerHTML) * parseFloat(display.innerHTML);
  } else if (islem == "/") {
    result.innerHTML = (
      parseInt(result.innerHTML) / parseInt(display.innerHTML)
    ).toFixed(2);
  } else if (percentvalue != 0) {
    result.innerHTML = (
      (parseInt(result.innerHTML) * parseInt(display.innerHTML)) /
      100
    ).toFixed(2);
  }
  display.innerHTML = "";
});
plusminus.addEventListener("click", (e) => {
  display.innerHTML = -display.innerHTML;
});
