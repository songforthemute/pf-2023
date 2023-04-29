const uglify = require("uglify-js");
const fs = require("fs");

// read the js file
const fileString = `${fs.readFileSync("src/js/index.js")}`;
// minify and uglify
const { code, map } = uglify.minify(fileString, { compress: true });

// create script
fs.writeFileSync("minified.js", code);
// fs.writeFileSync("minified.map.js", map);
