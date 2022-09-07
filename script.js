let generateBtn = document.querySelector(".btn-generate");
let copyBtn = document.querySelector(".copy");
let resultEl = document.querySelector(".result");
let passLength = document.querySelector(".pass-length");
let upperCaseEl = document.querySelector(".uppercase");
let lowercaseEl = document.querySelector(".lowercase");
let numberEl = document.querySelector(".number");
let symbolEl = document.querySelector(".symbol");

const randomEl = {
  uppercase: getRandomUpper,
  lowercase: getRandomLower,
  number: getRandomNumber,
  symbol: getRandomSymbols,
};

function generatePassword(
  upperCaseEl,
  lowercaseEl,
  numberEl,
  symbolEl,
  passLength
) {
  let generatedPassword = "";
  let checkedEl = [];
  if (upperCaseEl.checked) {
    checkedEl.push(upperCaseEl);
  }
  if (lowercaseEl.checked) {
    checkedEl.push(lowercaseEl);
  }
  if (numberEl.checked) {
    checkedEl.push(numberEl);
  }
  if (symbolEl.checked) {
    checkedEl.push(symbolEl);
  }

  if (checkedEl.length == 0) {
    return "";
  }

  for (let i = 0; i < passLength.value; i += checkedEl.length) {
    checkedEl.forEach((element) => {
      generatedPassword += randomEl[element.className]();
    });
  }

  console.log(generatedPassword);

  generatedPassword = generatedPassword.slice(0, passLength.value);
  console.log(generatedPassword);
  return generatedPassword;
}

generateBtn.addEventListener("click", () => {
  resultEl.innerText = generatePassword(
    upperCaseEl,
    lowercaseEl,
    numberEl,
    symbolEl,
    passLength
  );
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(resultEl.textContent);
  alert("Password is copied to the clipboard");
});

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbols() {
  const symbols = "!#$%&'()*+-/<=>?@";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
