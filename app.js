//jshint esversion:6
// ==================REQUIRING SOME PACKAGES====================================
let faker = require('faker');
let mysql = require('mysql');
let express = require('express');
let app = express();
let bodyParser = require("body-parser");
let _ = require('lodash');

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

// ==================CONNECTING TO DATABASE====================================
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'robot2025',
  database: 'resturant'
});
// ==================GET ROUTING HERE INSIGHTS====================================
// getting insights from DB
app.get('/', function (req, res) {
  //find count of user in db
  let q = 'SELECT COUNT(*) AS count FROM CUSTOMERS';
  connection.query(q, function (err, results) {
    if (err) throw err;
    let count = results[0].count;
    // respond with that count
    res.render('home', { count: count });
  });
});
// ==================POSTING HERE SIGNUP================================================
app.post('/register',function(req,res){
  let person = {
    first_name: req.body.first_name,
    last_name : req.body.last_name,
    email : req.body.email
};

console.log(person);

// inserting into customer table by subscribe
connection.query('INSERT INTO CUSTOMERS SET ?', person, function(err, result) {
  if (err) throw err;
  res.redirect('/');
});
});
// ==================POSTING HERE ORDER================================================

app.post('/order',function(req,res){
  let order={
    category :req.body.category,
    meals :req.body.meals,
    meal__quan : req.body.meal__quan,
    vegetables : req.body.vegetables,
    veg__quan : req.body.veg__quan,
    fruits : req.body.fruits,
    fru__quan : req.body.fru__quan,
    seafood : req.body.seafood,
    sea__quan : req.body.sea__quan,
    drinks : req.body.drinks,
    drink__quan : req.body.drink__quan,
    name : req.body.name,
    email : req.body.email,
    phone : req.body.phone,
    address : req.body.address,
    message : req.body.message
  };
  console.log(order);

  let totalPrice;

  if(order.meals==='none'){
    order.meal__quan = 0;
  }
  else if (order.vegetables==='none'){
    order.veg__quan = 0;
  }
  else if (order.fruits==='none'){
    order.fru__quan = 0;
  }
  else if (order.seafood==='none'){
    order.sea__quan = 0;
  }
  else if (order.drinks==='none'){
    order.drink__quan = 0;
  }


totalPrice = (order.meal__quan * 20.5) + (order.veg__quan * 5.60) + (order.fru__quan * 8.10) + (order.sea__quan * 50.0) + (order.drink__quan * 3.0);



res.render('success',{order,totalPrice});
});









// ==================SERVER LISTENING ON PORT 8080====================================
app.listen(8080, function () {
  console.log('App listening on port 8080!');
});