var myobject = {
    myvalue : "false"
}

function processatatime(myvalue){
    console.log("inside process at a time")
    myvalue = "false"
    console.log(myvalue);
    return "true"
}
function accountUpdates(val){
    val.myvalue = val.myvalue  + " " + "s";
    console.log(val.myvalue)
    // console.log("inside account Updates")
    // val = "start";
    // val = processatatime(val);
    // console.log("what is the value of val " + val)
}
function cron(myvalue){
   accountUpdates(myvalue);
   accountUpdates(myvalue);
   accountUpdates(myvalue);
   accountUpdates(myvalue);
}

cron(myobject);

console.log("outside" )



let broo = ["lkajdf","alkdf","aldkj0"]
console.log(broo[0]);
