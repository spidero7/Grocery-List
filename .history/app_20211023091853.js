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
    // clear items
clearButton.addEventListener('click', clearItems);

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

        const deleteButton = element.querySelector('.delete-btn'); // 37
        const editButton = element.querySelector('.edit-btn'); // 38

        deleteButton.addEventListener('click', deleteItem); // 39
        editButton.addEventListener('click', editItem); // 40
        // append child
        list.appendChild(element); // 20.
        // display alert
        displayAlert('item added to the list', 'success'); // 21.
        // show container
        container.classList.add('show-container'); // 22/
        // add to local storage
        addToLocalStorage(id, value); // 23. /placeholder
        // set back to default
        setBackToDefault(); // 24. placeholder
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

// clear items
function clearItems() { // 31.
    const items = document.querySelectorAll('.grocery-item') // 32
    
    if (items.length > 0) {  // 33
        items.forEach(item => {
            list.removeChild(item);
        })
    }
    container.classList.remove('show-container'); // 34
    displayAlert('empty list', 'danger'); // 35
    setBackToDefault(); // 36
    // localStorage.removeItem('list');
}

// edit function - 42
function editItem() {
    const element = e.currentTarget.parentElement.parentElement; // current target is a delete button

}
// delete function - 41
function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement; // current target is a delete button
    const id = element.dataset.id; // 47
    list.removeChild(element);

    if ( list.children.length === 0) { // 42
        container.classList.remove('show-container');
    }
    displayAlert('item removed', 'danger'); // 43
    setBackToDefault(); // 44
    // remove from local storage
    // removeFromLocalStorage(id); // 45
}
// set back to default
function setBackToDefault() { // 26.
    groceryInput.value = ""; // 27.
    editFLag = false; // 28.
    editID = ''; // 29.
    submitButton.textContent = "submit"; // 30.
}
// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) { // 25.
    console.log('added to local storage');
}

function removeFromLocalStorage(id) { // 46

}
// ****** SETUP ITEMS **********
