const fs = require("fs");
const sass = require("sass");

// read the scss file
const files = fs.readdirSync("src/scss");

for (const file of files) {
    // const stylesheet = fs.readFileSync(`src/scss/${file}`).toString();
    const { css } = sass.compile(`src/scss/${file}`);
    fs.writeFileSync(`style/${file.slice(0, file.length - 5)}.css`, css);
}
