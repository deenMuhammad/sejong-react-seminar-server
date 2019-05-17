const mongoose = require('mongoose');

const connection_string = "mongodb+srv://deen:deen@cluster0-xhyoo.mongodb.net/test?retryWrites=true"

mongoose.connect(connection_string, { useNewUrlParser: true })
//you can omit {useNewUrlParser}, but it is recommended by official Mongoose documentation
mongoose.connection.on('connected', ()=>{
    console.log("Connected to Database");
  });
  mongoose.connection.on('error', (err)=>{
    throw new Error("Failed to Connect to Database "+err);
  });
  
  mongoose.connection.on('disconnected', (err)=>{
    throw new Error("DB disconnected "+err);
  });