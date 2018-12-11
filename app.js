//app.js 
const express = require('express'); 
// Body parser
const bodyParser = require('body-parser');

// initialize our express app 
const app = express(); 

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url ='mongodb://someuser:abcd1234@ds125684.mlab.com:25684/productstutorial';
let dev_db_url2 ='mongodb://donperignon:12345prueba@ds125684.mlab.com:25684/productstutorial';

let mongoDB = process.env.MONGODB_URI || dev_db_url2;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDBconnection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//Imports routes for the products
const product = require('./routes/product.route');
//usamos product
app.use('/products', product);

let port = 1234; 
app.listen(port, () => { 
	console.log('Server is up and running on port numner ' + port); 
}); 
