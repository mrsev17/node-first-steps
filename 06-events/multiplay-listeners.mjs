import EventEmitter from "events";

const myEmmiter = new EventEmitter();

myEmmiter.on("myEvent", () => console.log("First event listener"));

myEmmiter.on("myEvent", () => console.log("Second event listener"));

myEmmiter.on("otherEvent", () => console.log("Other Event"));

myEmmiter.setMaxListeners(17);
console.log(myEmmiter.getMaxListeners());
console.log(myEmmiter.eventNames());

setTimeout(() => {
    myEmmiter.emit("myEvent");
    myEmmiter.emit("otherEvent");
}, 1000);
