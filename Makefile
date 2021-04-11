build: bundle-content-script
	web-ext build -a target --overwrite-dest

bundle-content-script: npm-update
	browserify content_script/enter.js -o content_script/bundle.js

npm-update:
	npm install --prefix content_script/

clean:
	rm -rf target
	rm -rf content_script/node_modules
	rm -f content_script/bundle.js