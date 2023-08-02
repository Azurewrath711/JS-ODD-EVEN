let inputNumber = document.querySelector("#inputNumber")
let display = document.querySelector("#display")
function findX(x) {
    return x == "."
}

function checkNum() {
    
    // BLANK
    if (inputNumber.value == "") {
        display.innerHTML = "";
        alert("Cannot be Blank, Please enter a number");
    }
    // DECIMAL
    else if(Array.from(inputNumber.value.toString()).find(findX)) {
       display.innerHTML = "Please input a whole number"
    }
    // EVEN
    else if(inputNumber.value % 2 == 0) {
        display.innerHTML = "Even";
    }
   
    // ODD
    else if (inputNumber.value % 2 != 0){
        display.innerHTML = "Odd"
    } 
  
}

