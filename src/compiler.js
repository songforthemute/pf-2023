console.log("---------------------------------------------");
console.time("compile scss");

const fs = require("fs");
const sass = require("sass");

const { css } = sass.compile(`src/scss/index.scss`);
fs.writeFileSync(`style/index.css`, css);

console.timeEnd("compile scss");
console.log("Compiling SCSS is done.");
console.log("---------------------------------------------");
