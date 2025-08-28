var myMap = new Map();

function changeValue(thisMap){
    thisMap.set("check",234);
    thisMap.set("solid",238);
    return thisMap;
}
var myString = "2023-04-07 14:47:57";
var ourString = myString.split(" ");
var first = ourString[0];
var second = ourString[1];
console.log("first is " + first);
console.log("second is " + second);

myMap = changeValue(myMap);
console.log(myMap.size);
console.log(myMap.get("check"));
console.log("this is the new change");