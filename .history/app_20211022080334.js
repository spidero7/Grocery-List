// ****** SELECT ITEMS ********** // 1.
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const groceryInput = document.getElementById('grocery');
const submitButton = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearButton = document.querySelector('.clear-btn');

// edit option // 2.
let editElement;
let editFLag = false;
let editID = '';

// ****** EVENT LISTENERS **********
    // submit form
form.addEventListener('submit', addItem) // 3. when we submit (click on the button) ivoke function addItem

// ****** FUNCTIONS **********
function addItem(e) { // 4.
    e.preventDefault(); // 5.
    const value = groceryInput.value; // 6. store user input
    const id = new Date().getTime().toString(); // 7. unique number for the item

    if (value && !editFLag) { // 8.
        console.log('add value to the list');
    } else if (value && editFLag) {
        console.log('editing');
    } else {
        alert.textContent = "empty value"; // 8.
        alert.classList.add('alert-danger');
    }
}

    // display alert
function displayAlert(text, action) {
    
}

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
