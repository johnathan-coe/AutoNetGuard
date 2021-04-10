// Stores the content of the table in local storage
function store() {
    console.log("storing");

    // Throw all the values into local storage
    ["A", "B", "C", "D", "E", "F", "G"].forEach((i) => {
        [1, 2, 3, 4, 5, 6, 7].forEach((j) => {
            let key = i+j;
            let value = document.getElementById(key).value.toUpperCase();
            
            if (value != "") {
                console.log(key + value);
                browser.storage.local.set({[key]: value});
            }
        })
    })

    document.getElementsByTagName("button")[0].style.color = "green";
}

document.getElementsByTagName("button")[0].onclick = store;