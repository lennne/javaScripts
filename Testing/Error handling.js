// console.log(a+b);

// throw new ReferenceError();
try {
    // console.log(a+b);
    throw new ReferenceError();
} catch (err) {
    console.log(err);
    console.log("there was an error");
    console.log("the error was saved in the error log");

}

var letters = 'abcdefgh';
console.log(letters.match(/d/));

// Error prevention
// function addTwoNums(a,b){
//     try {
//         console.log(typeof(a));
//         if(typeof(a)!= "number"){
//             throw new TypeError("the first argument is not a number");
//         }else if (typeof(b)!= "number"){
//             throw new TypeError("the second argument is not a number");
//         }
//         else{
//             console.log(a+b);
//         }
//     } catch (err) {
//         console.log("Error!" ,err);
//     }
// }

// addTwoNums(5,"5");

function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2;
    var condition2 = typeof(match) == 'string' && match.length == 1;
    if(condition1 && condition2){
     
    for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            //if the current character at position i in the word is equal to the match
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
   
    }else{
        console.log("Please pass correct arguments to the function.");
    }
}
letterFinder(2,2);
letterFinder("cat","c");