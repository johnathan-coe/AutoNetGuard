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
        let cell = document.createElement("td");
        tbody.children[i].appendChild(cell);

        let entry = document.createElement("input");
        cell.appendChild(entry);

        // Make the inputs only accept a single character
        entry.setAttribute('maxlength', 1);
        entry.setAttribute('size', 1);

        // Set the name of the input to its co-ordinate
        entry.setAttribute('name', alphaHead[j]+i);
    }
}