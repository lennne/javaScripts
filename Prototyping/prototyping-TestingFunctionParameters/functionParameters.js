const sweetFunction = require('./mysampleObjtest');

var myObj = {
    firstName : "big",
    LastName : "blue"
}


sweetFunction.testingthis(myObj);
console.log(myObj.firstName);
console.log(myObj.LastName);

function checkingTryCatch(){
    try {
        var results;
        results.map
    } catch (err) {
        console.log("yhup it doesn't work");
    }
}

checkingTryCatch();

myObj.middlename = "hogia";

for (let prop in myObj){
    console.log(prop);

}