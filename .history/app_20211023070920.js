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
        const element = document.createElement('article'); // 14.
        // add class
        element.classList.add('grocery-item'); // 15.
        // add id
        const attr = document.createAttribute('data-id'); // 16.
        attr.value = id // 17.
        element.setAttributeNode(attr); // 18.
        element.innerHTML = `<p class="title">${value}</p>
        <div class="btn-container">
          <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
          </button>
          <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
          </button>
        </div>`; // 19.
        // append child
        list.appendChild(element); // 20.
        // display alert
        displayAlert('item added to the list', 'success'); // 21.
        // show container
        container.classList.add('show-container'); // 22/
        // add to local storage
        addToLocalStorage(id, value); // 23. /placeholder
        // set back to default
        setBackToDefault();
    } else if (value && editFLag) {
        console.log('editing');
    } else {
        displayAlert('please enter value', 'danger'); // 10.
    }
}

    // display alert
function displayAlert(text, action) {
    alert.textContent = text; // 8.
    alert.classList.add(`alert-${action}`); // 9.

    // remove alert
    setTimeout(function() { // 11.
        alert.textContent = ''; // 12.
    alert.classList.remove(`alert-${action}`); // 13.
    }, 1000)
}

// set back to default
// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
