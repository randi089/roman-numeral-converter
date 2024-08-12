const input = document.getElementById("number");
const button = document.getElementById("convert-btn");
const output = document.getElementById("output");

button.addEventListener("click", function () {
  const iNumber = input.value;
  const checkNumber = /^(^-)?\d+$/;
  console.log(checkNumber.test(iNumber));
  if (checkNumber.test(iNumber)) {
    if (iNumber < 1) {
      output.classList.remove("hidden");
      output.classList.add("invalid");
      output.innerText = "Please enter a number greater than or equal to 1";
      return;
    } else if (iNumber > 3999) {
      output.classList.remove("hidden");
      output.classList.add("invalid");
      output.innerText = "Please enter a number less than or equal to 3999";
      return;
    }
    output.classList.remove("hidden");
    output.classList.remove("invalid");
    output.innerText = convertToRoman(Number(iNumber));
  } else {
    output.classList.remove("hidden");
    output.classList.add("invalid");
    output.innerText = "Please enter a valid number";
  }
});

function convertToRoman(num, from = "") {
  if (num === 0) return from;
  const romanBaseSymbol = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  for (const key in romanBaseSymbol) {
    if (num >= romanBaseSymbol[key]) {
      return convertToRoman(num - romanBaseSymbol[key], from + key);
    }
  }
}
