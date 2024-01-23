const path = require("path");

const filePath = "/Users/Nick/Desktop/node/index.js";
const textPathTxt = "/Users/Nick/Desktop/text.txt";
const relativePath = "./node/movie.mov";

console.log(path.isAbsolute(filePath)); // true
console.log(path.isAbsolute(relativePath)); // false

console.log(path.basename(filePath)); // index.js
console.log(path.basename(textPathTxt)); // text.txt

console.log(path.dirname(filePath)); // /Users/Nick/Desktop/node
console.log(path.dirname(textPathTxt)); // /Users/Nick/Desktop

console.log(path.resolve(relativePath));

console.log(path.extname(textPathTxt));
console.log(path.extname(relativePath));

console.log(path.parse(filePath));

const parsedPath = path.parse(filePath);
console.log(filePath);
console.log(path.join(parsedPath.dir, `renamed-${parsedPath.name}.mjs`));
// console.log(filePath);
