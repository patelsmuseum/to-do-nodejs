// required express module
const express=require('express');
const app=express();

//selecting the port  
const port=8000;
const path = require('path');


// required db
const db = require('./config/mongoose');
const TasksList =require('./models/task')



// set up view engine as ejs
app.set('view engine','ejs');

// used static files
app.use(express.static(path.join(__dirname,'assests')));

// middleware to read url request
app.use(express.json());
app.use(express.urlencoded({extended: true}));



// used express routes
app.use('/',require('./routes'));

// app listening on port
app.listen(port,function(err){
    // if error in running the server
    if(err){
        console.log('Error Running the Server !');
        return;
    }
    console.log('Server is up and running on port : ',port)
});