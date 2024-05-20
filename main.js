function intToRoman(num) {
  const symbolsList = [
      ["I", 1],
      ["IV", 4],
      ["V", 5],
      ["IX", 9],
      ["X", 10],
      ["XL", 40],
      ["L", 50],
      ["XC", 90],
      ["C", 100],
      ["CD", 400],
      ["D", 500],
      ["CM", 900],
      ["M", 1000],
      ['V\u0305', 5000],
      ['X\u0305', 10000],
      ['L\u0305', 50000],
      ['C\u0305', 100000],
      ['D\u0305', 500000],
      ['M\u0305', 1000000],
  ];

  let i = symbolsList.length - 1;
  let roman = "";
  while (num > 0) {
      const currentDivider = symbolsList[i][1];
      const currentSymbol = symbolsList[i][0];
      
      const result = Math.floor(num / currentDivider);
      if (result > 0) {
          let temp = "";
          for (let j = 0; j < result; j++) {
              temp += currentSymbol;
          }
          roman += temp;
          num %= currentDivider;
      }
      i -= 1;
  }
  return roman;
}

// https://www.calculateme.com/roman-numerals/to-roman/
const calculateButton = document.getElementById("convert-button");
const errorBox = document.querySelector(".error");
const number = document.getElementById("number");
const output = document.getElementById("output");


function Engine(){
    const input = number.value; 
    // console.log(input)
    if ( input == "") {
        errorBox.textContent = "Please input a value";
        output.textContent = "";
        return;
      }

    if (input >= 4000000) {
        errorBox.textContent = "please enter a number lesss than 4000000";
        output.textContent = "";
        return;
      
    }  
    if (input <= 0) {
        errorBox.textContent = "please enter a number greater than 0";
        output.textContent = "";
        return;
      
    }  

    const ans = intToRoman(input);
    output.textContent = input + " = " + ans;
    errorBox.textContent = "";

    
}


calculateButton.addEventListener("click", function (ev) {
    ev.preventDefault();
    Engine();

});
  
  document.addEventListener("keydown", function (ev) {
    if (ev.key == "Enter") {
    ev.preventDefault(); 
      Engine();
    }
  });