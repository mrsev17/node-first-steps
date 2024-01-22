import EventEmitter from "events";
import fs from "fs";

const fileEmitter = new EventEmitter();

const filePath = "./first.txt";

fileEmitter.on("writeComplete", () => {
    console.log("File first.txt was written");
    fs.appendFile(filePath, "\nOne more line", () => {
        fileEmitter.emit("appendComplete");
    });
});

fileEmitter.on("appendComplete", () => {
    console.log("File first.txt updated");
    fs.rename(filePath, "first-rename.txt", () => {
        fileEmitter.emit("renameComplete");
    });
});

fileEmitter.on("renameComplete", () => {
    console.log("File first.txt renamed to first-rename.txt");
});

fs.writeFile(filePath, "First file text", () => {
    fileEmitter.emit("writeComplete");
});
