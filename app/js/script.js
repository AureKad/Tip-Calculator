const tipButton = document.querySelectorAll('.tip__button');
const tipInput = document.querySelector('.input__button');
const numberPeople = document.querySelector('.errorText');
const peopleInput = document.querySelector('.input-people');
const inputField = document.querySelectorAll(".input-field");

var bill = document.getElementById("bill").value;
var tip = document.getElementById("tip").value;
var people = document.getElementById("people").value;
tip=0;

tipInput.addEventListener('click', function() {
    tipButton.forEach(function(button) {
        button.classList.remove('active-button');
    });
    tipInput.classList.add('active-input');
    update();
});

function update() {
    bill = document.getElementById("bill").value;
    people = document.getElementById("people").value;  

    if(tipInput.classList.contains('active-input')) {
        tip = tipInput.value;
    } else {
        tipButton.forEach(function(elem) {
            if(elem.classList.contains('active-button')) {
                tip = elem.value;
            }
        });
    }

    if (people==0) {
        numberPeople.classList.add("error");
        peopleInput.classList.add("error");
    } else {
        numberPeople.classList.remove("error");
        peopleInput.classList.remove("error");
    }
    calc();
}

function calc() {
    var sum = 0;
    bill = Number(bill);
    tip = Number(tip);
    people = Number(people);
    sum = (bill*(tip/100)+bill)/people;
    sum  = (Math.round(sum * 100)/100);
    if (!isNaN(sum) && sum!=Infinity){
        document.getElementById('amount').innerHTML = ((bill*(tip/100))/people).toFixed(2);
        document.getElementById('total').innerHTML = sum.toFixed(2);
    } else {
        sum=0;
        document.getElementById('amount').innerHTML = sum.toFixed(2);
        document.getElementById('total').innerHTML = sum.toFixed(2);
    }
}

tipButton.forEach(function(elem) {
    elem.addEventListener('click', function() {
        tipButton.forEach(function(button) {
            button.classList.remove('active-button');
            tipInput.classList.remove('active-input');
        });
        elem.classList.add('active-button');
        update();
    });
})

inputField.forEach(function(elem) {
    elem.addEventListener("input", function() {
        update();
    });
});

function reset () {
    document.getElementById("bill").value= 0;
    document.getElementById("tip").value= 0;
    document.getElementById("people").value= 0;

    tipButton.forEach(function(button) {
        button.classList.remove('active-button');
    });
    tipInput.classList.remove('active-input');
    numberPeople.classList.remove("error");
    peopleInput.classList.remove("error");
    update();
}