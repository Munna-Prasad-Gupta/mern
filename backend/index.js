const connectToMongo = require('./db')
const express = require('express')
require('dotenv').config({ path: './.env.local'});
const app = express();
const port = process.env.PORT || 5000;

app.get('/' ,(req,res)=>{
    res.send('home ')
})


app.listen(port ,()=>{
    console.log(`Listening to port ${port}`);
});

connectToMongo();

