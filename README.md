# AutoNetGuard
A Firefox extension that automatically enters NetGuard credentials when prompted on bnz.co.nz

## Building from source
### Requirements
- Node JS
- npm
- Browserify

### Build
In the root directory, perform the following:

```bash
# Place Tesseract in node_modules
npm install

# Bundle using Browserify into 'bundle.js' and build using web-ext
./build.sh
```