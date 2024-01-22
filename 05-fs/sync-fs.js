const fs = require("fs");

try {
    fs.writeFileSync("./first.txt", "First file text");
    console.log("File first.txt was written");
    fs.appendFileSync("./first.txt", "\nOne more line");
    console.log("File first.txt updated");
    fs.renameSync("./first.txt", "first-rename.txt");
    console.log("File first.txt renamed to first-rename.txt");
} catch (error) {
    console.error(error);
}
