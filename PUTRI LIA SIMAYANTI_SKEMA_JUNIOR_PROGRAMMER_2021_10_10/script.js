let outputScreen = document.getElementById("output-screen");

// Insert angka ke textview
function display(num) {
    outputScreen.value += num;
}

function calculate() {
    try {
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err) {
        alert("invalid");
    }
}

// Clean panggil fanction clean
function clean() {
    outputScreen.value = "";
}

// Delete
function del() {
    outputScreen.value = outputScreen.value.slice(0, -1) ;
}