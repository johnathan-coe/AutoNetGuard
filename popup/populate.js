// This script populates the table with headings and input boxes
let tbody = document.getElementById("ng-tablebody");

// Top row
let alphaHead = ["", "A", "B", "C", "D", "E", "F", "G"];
alphaHead.forEach((content) => {
    let elem = document.createElement("th");
    elem.innerHTML = content;

    tbody.children[0].appendChild(elem);
});

// For every row after
for (let i=1; i<=7; i++) {
    // First column is a header
    let head = document.createElement("th");
    head.innerHTML = i;
    tbody.children[i].appendChild(head);

    // Populate with inputs
    for (let j=1; j<8; j++) {
        // Cell containing the input box
        let cell = document.createElement("td");
        tbody.children[i].appendChild(cell);

        // The input field itself
        let entry = document.createElement("input");
        cell.appendChild(entry);

        // Make the inputs only accept a single character
        entry.setAttribute('maxlength', 1);
        entry.setAttribute('size', 1);

        // Set the id of the input to its co-ordinate
        entry.setAttribute('id', alphaHead[j]+i);
    }
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
