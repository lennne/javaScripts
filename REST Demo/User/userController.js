//the callback functions which are being passed to router methods
//the controller calls the service methods, therefore you need to import the service functions 

const userService = require('./userService');

//will receive a function passed from userRouter
const getUsers = function(userId0,done){
    userService.getUsers(userId,done);
}

const getUserById = function(userId,done){
    userService.getUserById(userId,done);
}
module.exports = {getUsers, getUserById};
