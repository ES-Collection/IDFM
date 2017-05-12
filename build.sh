# concatenate the .js files then delete any '#include' lines.

# Go to current directory so we can double click the file from anywhere
cd "${0%/*}"
cat ./src/header.js ./src/presetManager.js ./src/main.js | grep -Ev "#include" > fontManager.js