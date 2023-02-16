const pencilsButton = document.getElementById("pencils");
const ballpenButton = document.getElementById("ballpen");
const paperButton = document.getElementById("paper");
const summaryLabel = document.getElementById("summary");
const button_1 = document.getElementById("wholePad");
const button_2 = document.getElementById("halfPad");
const button_3 = document.getElementById("quarterPad");
const button_4 = document.getElementById("yellowPad");
const button_5 = document.getElementById("elemPad_1");

const firebaseConfig = {
    apiKey: "AIzaSyAeqrfw9Ni3m3jG96PG2toIJYRvjDcjIr4",
    authDomain: "pos-webdev.firebaseapp.com",
    databaseURL: "https://pos-webdev-default-rtdb.firebaseio.com",
    projectId: "pos-webdev",
    storageBucket: "pos-webdev.appspot.com",
    messagingSenderId: "196532378438",
    appId: "1:196532378438:web:d6244210eef0d8fb22e347"
  };

  firebase.initializeApp(firebaseConfig);

  const db  = firebase.firestore();

  const increment = firebase.firestore.FieldValue.increment(1);

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
let checkoutButton = document.getElementById("checkout");
let decrementButton = document.getElementById("decrement");
decrementButton.id = "decrement";
checkoutButton.id = "checkout";
clearButton.id = "clearAll";
let items = [];                     
let totalCost = 0;
var item_count = 0;

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
        item_count++;   

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
        item_count++;   

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
        item_count++;   

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
        item_count++;

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
        item_count++;

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


const itemsRef = db.collection('POS').doc('Items');

clearButton.addEventListener("click", function() {
    summary.innerHTML = "";
    totalCost = 0;
    items = [];
    item_count = 0;
    
});

checkoutButton.addEventListener("click", function() {
    itemsRef.update({ "4B" : increment });

        for (let i = 0; i <= item_count ; i++){

            let newstr = items[i].name;
                 newstr.slice(0,-4);

        if (newstr == "1 Whole Pad")
        {
            itemsRef.update({ "1 Whole Pad" : increment });
        }
        else if (newstr == "1/2 Pad")
        {
            itemsRef.update({ "1/2 Pad" : increment });
        }
        else if (newstr == "1/4 Pad")
        {
            itemsRef.update({ "1/4 Pad" : increment });
        }
        else if (newstr == "Grade 1 Pad")
        {
            itemsRef.update({ "Grade 1 Pad" : increment });
        }
        else if (newstr == "Yellow Pad")
        {
            itemsRef.update({ "Yellow Pad" : increment });
        }
    }
    
});

decrementButton.addEventListener("click", function() { 
    let index = parseInt(document.getElementById("index_txb").value);
    index--;
    
    if (index >= 0 && index < items.length) {
        items[index].qty--;
        if (items[index].qty === 0) {
            totalCost -= items[index].cost;
            items.splice(index, 1);
        }
    }
    summary.innerHTML = items.map(item => `<p id=${item.name}>${item.name} x ${item.qty}</p>`).join("");
    summary.innerHTML += `<p>Total Cost: ${totalCost.toFixed(2)} pesos</p>`;
});
    
    
});