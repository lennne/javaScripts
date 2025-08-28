const earlierFunction = require('./passFunction');
let currentObject = {
    failed:[
        12,34,45,56
    ]
}

currentObject = earlierFunction.handleFunction(currentObject);
console.log(currentObject);