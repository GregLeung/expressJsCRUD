const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.route'); // Imports routes for the products
const mongoose = require('mongoose');


const app = express();
const PORT = 5555;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

mongoose.connect("mongodb://localhost:27017/ExpressJsCRUD", function(err, db) {
    if(!err) {
    }
  });
mongoose.Promise = global.Promise;

app.listen(PORT, ()=>{
    console.log('Service is up and running on port number ' + PORT);
})