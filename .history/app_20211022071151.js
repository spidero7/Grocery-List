// ****** SELECT ITEMS **********
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
form.addEventListener('submit', addItem)

// ****** FUNCTIONS **********
function addItem(e) {
    e.preventDefault();
    console.log(grocery.value);
}

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
