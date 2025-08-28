

console.log("second log");
console.log("third log");
console.log("fourth log");
new Promise((resolve, reject) => {
    console.log("first log");
    resolve("")
})
console.log("fifth log");
console.log("sixth log");

