/**
 * The script injected into the BNZ website when prompted for a NetGuard card
 */

// Include an OCR library (Tesseract)
var imported = document.createElement('script');
imported.src = 'https://unpkg.com/tesseract.js@v2.1.0/dist/tesseract.min.js';
document.head.appendChild(imported);

// Take the prompt, lookup in table, place in appropriate box
function enter(prompt, promptNumber) {    
    let key = prompt.toUpperCase().trim().slice(-2);

    let getVal = browser.storage.local.get(key);
    getVal.then(
        (val) => {
            let input = document.getElementById("response"+promptNumber)
            let out = (val[key] == undefined) ? "?" : val[key];
            input.setAttribute('placeholder', out)
    });
}

// Recognise a prompt image, given its src attribute
function recognizePrompt(src, promptNumber) {
    // Run in the context of the page, as our import won't work otherwise
    window.eval("Tesseract.recognize('" + src + "', 'eng', {})")
          .then(({ data: { text } }) => 
             { enter(text, promptNumber); });
}

function run() {
    console.log("Running");

    // For all three buttons
    for (let i = 1; i < 4; i++) {
        let src = document.getElementById("response"+i).parentElement.children[0].children[0].getAttribute("src");
        recognizePrompt(src, i);
    }

}

// Script is run on document idle, we need to wait a bit for the netguard interface to load in
let readyCheck = setInterval(function() {
    if (document.getElementById("response1") != undefined) {
       run();
       clearInterval(readyCheck);
    }
 }, 100);