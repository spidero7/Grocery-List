// ****** SELECT ITEMS ********** //1
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const groceryInput = document.getElementById('grocery');
const submitButton = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearButton = document.querySelector('.clear-btn');

// edit option
let editElement;
let editFLag = false;
let editID = '';

// ****** EVENT LISTENERS **********
    // submit form
form.addEventListener('submit', addItem) // 1. when we submit (click on the button) ivoke function addItem

// ****** FUNCTIONS **********
function addItem(e) { // 2.
    e.preventDefault();
    const value = groceryInput.value; // store user input
    const id = new Date().getTime().toString(); // unique number for the item
}

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
