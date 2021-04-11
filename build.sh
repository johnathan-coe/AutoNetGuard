# Ensure Tesseract is installed
npm install --prefix content_script/
browserify content_script/enter.js -o content_script/bundle.js
web-ext build --overwrite-dest