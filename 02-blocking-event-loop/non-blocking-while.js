const fs = require('fs');
let isRunning = true;

setTimeout(() => (isRunning = false), 10);

process.nextTick(() => console.log('Next tick'));

const setImediatePromise = () =>
    new Promise((resolve, reject) => {
        setImmediate(() => resolve());
    });

async function whileLoop() {
    while (isRunning) {
        console.log('While loop is running');
        await setImediatePromise();
    }
}
whileLoop().then(() => console.log('While loop ended'));
