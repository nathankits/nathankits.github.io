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
button_3.innerHTML = "1/4 Pad";
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
let button_1 = document.querySelectorAll("#yellowPad");
let button_2 = document.querySelectorAll("#wholePad");
let button_3 = document.querySelectorAll("#halfPad");
let button_4 = document.querySelectorAll("#quarterPad");
let button_5 = document.querySelectorAll("#elemPad_1");
let summary = document.querySelector("#summary");
let clearButton = document.getElementById("clearAll");
clearButton.id = "clearAll";
let items = [];
let totalCost = 0;

button_1.forEach(function(button) {
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
            let cost = parseFloat(this.getAttribute("data-cost"));
            items.push({ name: this.innerText, qty: 1, cost: cost });
            totalCost += cost;
        } else {
            totalCost += parseFloat(this.getAttribute("data-cost"));
        }
        summary.innerHTML = items.map(item => `<p id=${item.name}>${item.name} x ${item.qty}</p>`).join("");
        summary.innerHTML += `<p>Total Cost: ${totalCost.toFixed(2)} pesos</p>`;
    });
});

button_2.forEach(function(button) {
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
            let cost = parseFloat(this.getAttribute("data-cost"));
            items.push({ name: this.innerText, qty: 1, cost: cost });
            totalCost += cost;
        } else {
            totalCost += parseFloat(this.getAttribute("data-cost"));
        }
        summary.innerHTML = items.map(item => `<p id=${item.name}>${item.name} x ${item.qty}</p>`).join("");
        summary.innerHTML += `<p>Total Cost: ${totalCost.toFixed(2)} pesos</p>`;
    });
});

button_3.forEach(function(button) {
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
            let cost = parseFloat(this.getAttribute("data-cost"));
            items.push({ name: this.innerText, qty: 1, cost: cost });
            totalCost += cost;
        } else {
            totalCost += parseFloat(this.getAttribute("data-cost"));
        }
        summary.innerHTML = items.map(item => `<p id=${item.name}>${item.name} x ${item.qty}</p>`).join("");
        summary.innerHTML += `<p>Total Cost: ${totalCost.toFixed(2)} pesos</p>`;
    });
});

button_4.forEach(function(button) {
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
            let cost = parseFloat(this.getAttribute("data-cost"));
            items.push({ name: this.innerText, qty: 1, cost: cost });
            totalCost += cost;
        } else {
            totalCost += parseFloat(this.getAttribute("data-cost"));
        }
        summary.innerHTML = items.map(item => `<p id=${item.name}>${item.name} x ${item.qty}</p>`).join("");
        summary.innerHTML += `<p>Total Cost: ${totalCost.toFixed(2)} pesos</p>`;
    });
});

button_5.forEach(function(button) {
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
            let cost = parseFloat(this.getAttribute("data-cost"));
            items.push({ name: this.innerText, qty: 1, cost: cost });
            totalCost += cost;
        } else {
            totalCost += parseFloat(this.getAttribute("data-cost"));
        }
        summary.innerHTML = items.map(item => `<p id=${item.name}>${item.name} x ${item.qty}</p>`).join("");
        summary.innerHTML += `<p>Total Cost: ${totalCost.toFixed(2)} pesos</p>`;
    });
});

clearButton.addEventListener("click", function() {
    summary.innerHTML = "";
    totalCost = 0;
    items = [];
});
});