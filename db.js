// ==================REQUIRING SOME PACKAGES====================================
var faker = require("faker");
var mysql = require("mysql");
// ==================CONNECTING TO DATABASE====================================
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "robot2025",
  database: "resturant",
});

//=================================================================================
// ==================INSERTING INTO CUSTOMERS TABLE================================
var dataCustomers = [];
for (let i = 0; i < 500; i++) {
  dataCustomers.push([
    faker.name.firstName(),
    faker.name.lastName(),
    faker.internet.email(),
    faker.address.city(),
  ]);
}
var q = "INSERT INTO CUSTOMERS (first_name, last_name,email,address) VALUES ?";
connection.query(q, [dataCustomers], function (err, result) {
  console.log(err);
  //   console.log(result);
});
// ==================INSERTING INTO DELIVERY BOYS TABLE================================
var dataBoys = [];
for (let i = 0; i < 500; i++) {
  dataBoys.push([
    faker.name.firstName(),
    faker.name.lastName(),
    faker.phone.phoneNumberFormat(),
    faker.random.number(),
  ]);
}
var q2 =
  "INSERT INTO DELIVERY_BOYS (first_name, last_name,phone_num,vehicle_num) VALUES ?";
connection.query(q2, [dataBoys], function (err, result) {
  console.log(err);
});
// ==================INSERTING INTO CATEGORY TABLE================================
var category = [
  ["Vegetables"],
  ["Fruits"],
  ["Meat and Poultry"],
  ["Fish and Seafood"],
  ["Drinks"],
];
var q3 = "INSERT INTO CATEGORY (category_name) VALUES ?";
connection.query(q3, [category], function (err, result) {
  console.log(err);
  console.log(result);
});
// ==================INSERTING INTO AREA TABLE================================
var areas = [];
for (let i = 0; i < 10; i++) {
  areas.push([faker.address.city(), faker.address.state()]);
}
var q4 = "INSERT INTO AREA (city, state) VALUES ?";
connection.query(q4, [areas], function (err, result) {
  console.log(err);
});

// ==================INSERTING INTO ORDERS TABLE================================
var orders = [];
for (let i = 0; i < 10; i++) {
  orders.push([faker.commerce.price(), faker.address.city(), i + 1, i + 2]);
}
var q5 =
  "INSERT INTO ORDERS (price, delivery_address,customer_id,boy_id) VALUES ?";
connection.query(q5, [orders], function (err, result) {
  console.log(err);
});

// ==================INSERTING INTO ITEMS TABLE================================

var items = [
  ["Artichokes", 1, faker.commerce.price()],
  ["Broccoli", 1, faker.commerce.price()],
  ["Carrots", 1, faker.commerce.price()],
  ["Garlic", 1, faker.commerce.price()],
  ["Leeks", 1, faker.commerce.price()],
  ["Potatoes", 1, faker.commerce.price()],
  ["Tomatoes", 1, faker.commerce.price()],
  ["Yams", 1, faker.commerce.price()],

  ["Apple", 2, faker.commerce.price()],
  ["Apricots", 2, faker.commerce.price()],
  ["Avocado", 2, faker.commerce.price()],
  ["Banana", 2, faker.commerce.price()],
  ["Blackberries", 2, faker.commerce.price()],
  ["Cherries", 2, faker.commerce.price()],
  ["Figs", 2, faker.commerce.price()],
  ["Grapefruit", 2, faker.commerce.price()],
  ["Blueberries", 2, faker.commerce.price()],
  ["Mango", 2, faker.commerce.price()],
  ["Mango", 2, faker.commerce.price()],

  ["Chicken Shawerma Sandwich", 3, faker.commerce.price()],
  ["Chicken Shawerma Fatteh", 3, faker.commerce.price()],
  ["French Fries Platter", 3, faker.commerce.price()],
  ["Meat Shawerma Sandwich", 3, faker.commerce.price()],

  ["Anchovies", 4, faker.commerce.price()],
  ["Blowfish", 4, faker.commerce.price()],
  ["Flounder", 4, faker.commerce.price()],
  ["Hake", 4, faker.commerce.price()],
  ["Lamprey", 4, faker.commerce.price()],
  ["Lingcod", 4, faker.commerce.price()],

  ["Wine", 5, faker.commerce.price()],
  ["Coffee", 5, faker.commerce.price()],
  ["Lemonade", 5, faker.commerce.price()],
  ["Iced tea", 5, faker.commerce.price()],
  ["Hot chocolate", 5, faker.commerce.price()],
  ["Juice", 5, faker.commerce.price()],
];

var q5 = "INSERT INTO MENU_ITEMS (item_name, category_id,price) VALUES ?";
connection.query(q5, [items], function (err, result) {
  console.log(err);
});

// ==================ENDING CONNECTION OF DATABASE====================================
connection.end();
