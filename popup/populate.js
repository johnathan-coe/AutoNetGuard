/**
 * Populates the table in 'index.html' with headers, input fields and data from local storage. 
 */


let tbody = document.getElementById("ng-tablebody");

// Create a new element given a parent element, tag name and inner HTML
function newElem(parent, tagName, innerHTML) {
    let elem = document.createElement(tagName);
    elem.innerHTML = innerHTML;
    parent.appendChild(elem);

    return elem;
}

// Top row
let alphaHead = ["", "A", "B", "C", "D", "E", "F", "G"];
alphaHead.forEach((content) => {
    newElem(tbody.children[0], "th", content);
});

// For every row after
for (let row=1; row<8; row++) {
    let tr = tbody.children[row];

    // First column is a header
    newElem(tr, "th", row);

    // Populate with inputs
    for (let col=1; col<8; col++) {
        // Cell containing the input box
        let cell = newElem(tr, "td", "")

        // The input field itself
        let entry = newElem(cell, "input", "");

        // Make the inputs only accept a single character
        entry.setAttribute('maxlength', 1);
        entry.setAttribute('size', 1);

        // Set the id of the input to its co-ordinate
        entry.setAttribute('id', alphaHead[col]+row);
    }

    // Extra element for padding
    newElem(tr, "td", "")
}

// Get all defined values from local storage
let getValues = browser.storage.local.get();
// Put these values in the appropriate input boxes
getValues.then((values) => {
    for (const key in values) {
        let input = document.getElementById(key);
        if (input != null) {
            input.value = values[key];
        }
    }
});
