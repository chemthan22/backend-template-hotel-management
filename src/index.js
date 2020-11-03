const express = require('express');
const mongoose = require('mongoose');
const dbConfig = require('./config/db.config');
const app = express();
app.use(express.json())

const port = process.env.PORT || 3000;
app.listen(port,(e) => {
    if(e) console.log(e)
    console.log(`Server is running on port : ${port} `)
})

mongoose.connect(dbConfig.DB_CONFIG.URI,dbConfig.DB_OPTIONS,(e) => {
    if (e) console.log(e);
    console.log("DB Connected Successfully");
})

/*Root route */
app.get('/',(req,res) => {
    res.send("Root")
})

app.get('/mystack',(req,res) => {
    res.send("OK");
})


/**
 * GET ROUTE
 */

