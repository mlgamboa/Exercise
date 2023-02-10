const serverless = require('serverless-http');
const express = require('serverless-express/express');
const itemController = require('./Controllers/itemController');

let app = express();

app.use(express.json());

// Default route
app.get('/', function (req, res) {
  return res.send({ message: 'hello' });
});

app.get('/def', function (req, res) {
  return res.send({ message: 'This is a trial route' });
});

///////////// APIs ////////////
// Get all items in the DB
app.get('/getAllItems', (req, res) => {
  itemController.getAllItemController(req, res);
});

// Add an item in the DB
app.post('/addItems', function (req, res) {
  itemController.addItemWithQuantity(req, res);
});

// Delete an item in the DB
app.delete('/deleteAnItem', function (req, res) {
  itemController.deleteAnItem(req, res);
});

// Update an item in the DB
app.put('/updateAnItem', function (req, res) {
  itemController.updateAnItem(req, res);
});

exports.handler = serverless(app);
