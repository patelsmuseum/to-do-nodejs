// required mongoose 
const mongoose=require('mongoose');

main().catch(err => console.log(err));


// connected to the db
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/todo_db')
}

// acquired connection to db
const db=mongoose.connection;



//up and running then print the message
db.once('open',function(){
    console.log('Connected to Database :: MongoDB');
});
