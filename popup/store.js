/**
 * Takes the imput data from 'index.html' and places it in local storage.
 */

let storeButton = document.getElementById("store-button");
let footer = document.getElementById("footer");

// Stores the content of the table in local storage
function store() {
    console.log("Storing NetGuard details...");

    // If the user sees a red footer, something has gone wrong
    footer.style.background = "red";

    // Throw all the values into local storage
    ["A", "B", "C", "D", "E", "F", "G"].forEach((i) => {
        [1, 2, 3, 4, 5, 6, 7].forEach((j) => {
            let key = i+j;
            let value = document.getElementById(key).value.toUpperCase();
            
            if (value != "") {
                browser.storage.local.set({[key]: value});
            }
        })
    })

    // If the user sees a green footer, we haven't encountered an error
    footer.style.background = "green";
}

storeButton.onclick = store;