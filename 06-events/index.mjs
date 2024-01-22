import EventEmitter from "events";

const myEmmiter = new EventEmitter();

const timeOutListenerFn = (secondsQuantity) => {
    console.log(`Timeout event in ${secondsQuantity} seconds`);
};

myEmmiter.on("timeout", timeOutListenerFn);

setTimeout(() => {
    myEmmiter.emit("timeout", 1);
}, 1000);

setTimeout(() => {
    myEmmiter.emit("timeout", 2);
}, 2000);

myEmmiter.once("singleEvent", () => {
    console.log("Single event occurred");
});

// Listener function will be run once

setTimeout(() => myEmmiter.emit("singleEvent"), 2000);
setTimeout(() => myEmmiter.emit("singleEvent"), 4000);

// Remove listener from the "timeout"

setTimeout(() => {
    myEmmiter.off("timeout", timeOutListenerFn);
}, 3000);

setTimeout(() => {
    myEmmiter.emit("timeout", 3);
}, 3500);
