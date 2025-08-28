//DAO performs operation on the data
//we will work with the file module
const fs = require('fs');

const getUser = function(done){
    //done is a function
     fs.readFile('./User/user.json', (err,fileContent)=>{
        if(err){
            return done("Encountered error while getting users details");
        }
        let userData = JSON.parse(fileContent);
        return done(undefined, userData);
     })
}

const getUserById = function(userId,done){
    fs.writeFile('./User/user.json', (err,fileContent)=>{
        if(err){
            return done("Encountered error while getting users detaisl");
        }
        let userData = JSON.parse(fileContent);
        const finishedUserData = userData.find(user => userId === user);
        if(finishedUserData === undefined){
            return done("No user found for requested userId");
        }
        return done(undefined,finishedUserData);
    })
}

module.exports = {getUser};