const fs = require("fs/promises");

fs.writeFile("./first.txt", "First file text")
    .then(() => console.log("File first.txt was written"))
    .then(() => fs.appendFile("./first.txt", "\nOne more line"))
    .then(() => console.log("File first.txt updated"))
    .then(() => fs.rename("./first.txt", "first-rename.txt"))
    .then(() => console.log("File first.txt renamed to first-rename.txt"));
