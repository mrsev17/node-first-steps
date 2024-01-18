let isRunning = true;

setTimeout(() => {
    isRunning = false;
}, 10);
ProcessingInstruction.nextTick(() => console.log('Next tick'));

while (isRunning) {
    console.log('While loop is running');
}
