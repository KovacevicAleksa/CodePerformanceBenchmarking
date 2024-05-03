//Making array with random number
let sumArr = [];
let sumArr1 = [];

form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let repetition = document.getElementById("repetition").checked;
  let sorted = document.getElementById("sorted").checked;
  let numElements = document.getElementById("numElements").value;
  let minNumElements = document.getElementById("minNumElements").value;
  let maxNumElements = document.getElementById("maxNumElements").value;

  let uniqueNumbers = generateUniqueNumbers(
    numElements,
    minNumElements,
    maxNumElements,
    repetition,
    sorted
  );
  loops(uniqueNumbers);
});

function generateUniqueNumbers(quantity, min, max, repetition, sorted) {
  sumArr1 = [];
  sumArr = [];
  let uniqueNumbers;
  let num;
  if (repetition == true) {
    uniqueNumbers = new Set();
    while (uniqueNumbers.size < quantity) {
      num = Math.floor(Math.random() * (max - min + 1)) + min;
      uniqueNumbers.add(num);
    }
  } else {
    uniqueNumbers = [];
    for (let i = 0; i < quantity; i++) {
      num = Math.floor(Math.random() * (max - min + 1)) + min;
      uniqueNumbers[i] = num;
    }
  }
  if (sorted == true) {
    uniqueNumbers = Array.from(uniqueNumbers).sort((a, b) => a - b);
  } else {
    uniqueNumbers = Array.from(uniqueNumbers);
  }
  return uniqueNumbers;
}

function loops(uniqueNumbers) {
  console.time("forLoop");
  for (let i = 0; i < uniqueNumbers; i++) {
    sumArr[i] = uniqueNumbers[i];
  }
  console.log(uniqueNumbers);
  console.timeEnd("forLoop");

  console.time("forEach");
  console.log(sumArr1);
  uniqueNumbers.forEach((item) => {
    sumArr1.push(item);
    console.log(sumArr1);
  });
  console.timeEnd("forEach");
}
