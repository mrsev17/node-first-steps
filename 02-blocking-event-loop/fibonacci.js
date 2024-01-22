// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

const fib = (n) => {
    if (n === 0 || n === 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
};

console.log(fib(10));
