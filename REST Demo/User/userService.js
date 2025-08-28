//Service layer performs business logic tasks and calls the DAO layer
const userDAO = require('./userDAO');

const getUsers = function(done){
    userDAO.getUser(done);
}

const getUserById = function(userId,done){
    userDAO.getUserById(userId,done);
}

module.exports = {getUsers, getUserById}