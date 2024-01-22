const fs = require("fs");

fs.writeFile("./first.txt", "First file text", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File first.txt was written");
        fs.appendFile("./first.txt", "\nOne more line", (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("File first.txt was updated");
                fs.rename("./first.txt", "firstTXTRenamed.txt", (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Success");
                    }
                });
            }
        });
    }
});
