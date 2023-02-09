const pencilsButton = document.getElementById("pencils");
const ballpenButton = document.getElementById("ballpen");
const paperButton = document.getElementById("paper");
const summaryLabel = document.getElementById("summary");
const button_1 = document.getElementById("wholePad");
const button_2 = document.getElementById("halfPad");
const button_3 = document.getElementById("quarterPad");
const button_4 = document.getElementById("yellowPad");
const button_5 = document.getElementById("elemPad_1");

pencilsButton.addEventListener("click", function() {
button_1.innerHTML = "8B";
button_2.innerHTML = "7B";
button_3.innerHTML = "6B";
button_4.innerHTML = "5B";
button_5.innerHTML = "4B";
});

paperButton.addEventListener("click", function() {
button_1.innerHTML = "1 Whole Pad";
button_2.innerHTML = "1/2 Pad";
button_3.innerHTML = "1/4 pad";
button_4.innerHTML = "Yellow Pad";
button_5.innerHTML = "Grade 1 Pad";
})

ballpenButton.addEventListener("click", function() {
button_1.innerHTML = "HBW";
button_2.innerHTML = "Fine Tech";
button_3.innerHTML = "G Tech";
button_4.innerHTML = "Pilot";
button_5.innerHTML = "Montblanc";
});

document.addEventListener("DOMContentLoaded", function() {
let buttons = document.querySelectorAll(".rounded-button");
let summary = document.querySelector("#summary");
let clearButton = document.getElementById("clearAll");
clearButton.id = "clearAll";
let items = [];
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        let itemExists = false;
        for (let i = 0; i < items.length; i++) {
            if (items[i].name === this.innerText) {
                items[i].qty++;
                itemExists = true;
                break;
            }
        }

        if (!itemExists) {
            items.push({ name: this.innerText, qty: 1 });
        }

        summary.innerHTML = items.map(item => `<p>${item.name} x ${item.qty}</p>`).join("");
    });
});

clearButton.addEventListener("click", function() {
    summary.innerHTML = "";
    items = [];
});
});