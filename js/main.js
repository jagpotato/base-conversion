const BASE_MAX = 36;

let base;
let elements = [];
let inputN;
let input10;

base = 2;
elements = initElements(base, elements);
inputN = "1000101011";
convertNInto10(base, elements, inputN);

base = 16;
elements = initElements(base, elements);
input10 = "123456789";
convert10IntoN(base, elements, input10);

base = 36;
elements = initElements(base, elements);
input10 = "10000";
convert10IntoN(base, elements, input10);

base = 36;
elements = initElements(base, elements);
inputN = "ZZZZZ";
convertNInto10(base, elements, inputN);

function convertNInto10 (base, elements, inputN) {
  console.log(base + "進数" + inputN + "を10進数に変換");
  let split = inputN.split("");
  let result = 0;
  for ( let i = 0; i < split.length; i++ ) {
    result += elements.indexOf(split[i]) * Math.pow(base, split.length - 1 - i);
  }
  console.log(result);
}

function convert10IntoN (base, elements, input10) {
  console.log("10進数" + input10 + "を" + base + "進数に変換");
  let result = [];
  let inputCopy = input10.slice();
  while ( inputCopy > 0 ) {
    result.unshift(elements[(inputCopy % base)].toString(10));
    inputCopy = Math.floor(inputCopy / base);
  }
  console.log(result.join(""));
}

function initElements(base, elements) {
  if ( base > BASE_MAX ) {
    base = BASE_MAX;
  }
  elements = [];
  for ( let i = 0; i < base; i++ ) {
    if ( i <= 9 ) {
      elements.push(i.toString(10));
    } else {
      elements.push(String.fromCharCode(i + 55));
    }
  }
  return elements;
}