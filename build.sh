# concatenate the .js files then delete any '#include' lines.

# Go to current directory so we can double click the file from anywhere
cd "${0%/*}"
cat ./src/header.js ./src/presetManager.js ./src/polyPlotter.js ./src/fontManager.js | grep -Ev "#include" > fontManager.jsxinc