// Function to generate an array with unique random numbers
function generateUniqueNumbers(quantity, min, max, repetition, sorted, buffer) {
  let uniqueNumbers;
  if (repetition) {
    uniqueNumbers = new Set();
    while (uniqueNumbers.size < quantity) {
      const num = Math.floor(Math.random() * (max - min + 1)) + min;
      uniqueNumbers.add(num);
    }
  } else {
    uniqueNumbers = [];
    for (let i = 0; i < quantity; i++) {
      const num = Math.floor(Math.random() * (max - min + 1)) + min;
      uniqueNumbers.push(num);
    }
  }
  uniqueNumbers = sorted
    ? Array.from(uniqueNumbers).sort((a, b) => a - b)
    : Array.from(uniqueNumbers);
  if (buffer) {
    const bufferType = max > 32767 ? Int32Array : Int16Array;
    const buffer = new bufferType(uniqueNumbers);
    return buffer;
  } else {
    return uniqueNumbers;
  }
}

// Function to compare different copy methods for arrays
function compareLoopsCopyMethods(uniqueNumbers) {
  console.log(
    "%cCopy Arrays:",
    "color: green; font-size: 16px; font-weight: bold"
  );
  /*

   * let uniqueNumbers0 = new Array(100000).fill(Math.random());

   * let uniqueNumbers1 = new Array(100000).fill(Math.random());..

   */
  // ForLoop
  console.time("forLoop");
  let ArrForLoop = [];
  for (let i = 0; i < uniqueNumbers.length; i++) {
    ArrForLoop[i] = uniqueNumbers[i];
  }
  console.timeEnd("forLoop");
  console.log(ArrForLoop);
  ArrForLoop = null;

  // ForLoopCached
  console.time("forLoopCached");
  let ArrForLoopCached = [];
  const uniqSize = uniqueNumbers.length;
  for (let i = 0; i < uniqSize; i++) {
    ArrForLoopCached[i] = uniqueNumbers[i];
  }
  console.timeEnd("forLoopCached");
  console.log(ArrForLoopCached);
  ArrForLoopCached = null;

  // ForEachLoop
  console.time("ArrForEach");
  let ArrForEach = [];
  uniqueNumbers.forEach((item) => {
    ArrForEach.push(item);
  });
  console.timeEnd("ArrForEach");
  console.log(ArrForEach);
  ArrForEach = null;

  // ForOfLoop
  console.time("ArrForOf");
  let ArrForOf = [];
  for (const number of uniqueNumbers) {
    ArrForOf.push(number);
  }
  console.timeEnd("ArrForOf");
  console.log(ArrForOf);
  ArrForOf = null;

  // Map1
  console.time("ArrMap1");
  let ArrMap1 = [];
  ArrMap1 = uniqueNumbers.map((e) => e);
  console.timeEnd("ArrMap1");
  console.log(ArrMap1);
  ArrMap1 = null;

  // Map2
  console.time("ArrMap2");
  let ArrMap2 = [];
  uniqueNumbers.map((e) => ArrMap2.push(e));
  console.timeEnd("ArrMap2");
  console.log(ArrMap2);
  ArrMap2 = null;

  // Slice
  console.time("ArrSlice");
  let ArrSlice = [];
  ArrSlice = uniqueNumbers.slice();
  console.timeEnd("ArrSlice");
  console.log(ArrSlice);
  ArrSlice = null;

  //Spread
  console.time("ArrSpread");
  let ArrSpread = [];
  ArrSpread = [...uniqueNumbers];
  console.timeEnd("ArrSpread");
  console.log(ArrSpread);
  ArrSpread = null;

  //From
  console.time("ArrFrom");
  let ArrFrom = [];
  ArrFrom = Array.from(uniqueNumbers);
  console.timeEnd("ArrFrom");
  console.log(ArrFrom);
  ArrFrom = null;
}

// Event listener for form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const numElements = parseInt(document.getElementById("numElements").value);
  const minNumElements = parseInt(
    document.getElementById("minNumElements").value
  );
  const maxNumElements = parseInt(
    document.getElementById("maxNumElements").value
  );
  const repetition = document.getElementById("withoutRepetition").checked;
  const sorted = document.getElementById("sorted").checked;
  const buffer = document.getElementById("buffer").checked;

  const uniqueNumbers = generateUniqueNumbers(
    numElements,
    minNumElements,
    maxNumElements,
    repetition,
    sorted,
    buffer
  );
  console.log(
    "%cCreated Array:",
    "color: green; font-size: 16px; font-weight: bold"
  );
  console.log(uniqueNumbers);
  compareLoopsCopyMethods(uniqueNumbers);
});
