console.log("---------------------------------------------");
console.time("minify-js");

const uglify = require("uglify-js");
const fs = require("fs");

// read the js file
const fileString = `${fs.readFileSync("src/js/index.js")}`;
// minify and uglify
const { code, map } = uglify.minify(fileString, { compress: true });

// create script
fs.writeFileSync("index.js", code);
// fs.writeFileSync("minified.map.js", map);

console.timeEnd("minify-js");
console.log("Minifiying javascript is done.");
console.log("---------------------------------------------");
