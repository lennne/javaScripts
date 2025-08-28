//the routes forward the request to appropriate controller functions
const express = require('express');
const { Router } = require('express');
const routes = express.Router();

const userController = require('./userController');

routes.get('/',(req,res)=>{
    try{
        //the function being passed into getUsers is done from userController
        //so what happens is the (err,results)=>{} is called in wherever it is invoked at the lowlevel DAO getUsers function but where does it get returned to 
        userController.getUsers((err,results)=>{
            if(err){
                return res.status(400).send(err);
            }
            return res.status(200).send({status:"OK", data:results})
        });
        
    }catch(err){
        return res.status(500).send('Try after sometime');
    }
});

routes.get('/:userId', (req,res)=>{
    const userId = req.params;
    userController.getUserById(userId, (err,result)=>{
        if(err){
            return res.status(400).send(err);
        }
        return res.status(200).send({status:"OK", data:result});
    })
})

module.exports = routes;