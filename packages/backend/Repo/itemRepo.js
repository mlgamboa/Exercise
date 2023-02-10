const dbConnection = require('../Config/dbConfig');

// Get all item in the inventory
exports.getAllItems = async (reject, resolve) => {
  await dbConnection;

  let sql = `SELECT * FROM items`;

  dbConnection.query(sql, (error, results) => {
    try {
      resolve(results);
    } catch (error) {
      console.log(error);
    }
  });
};

// Add an item in the inventory
exports.addItem = async (request, reject, resolve) => {
  await dbConnection;
  data = request.body;
  let sql = `INSERT INTO items('name', 'description', 'quantity') VALUES ( ?, ?, ?)`;
  let itemChecker = await addingSameItem(data);
  console.log(itemChecker);

  dbConnection.query(sql, [data.name, data.description, data.quantity], (error, results) => {
    if (error) {
      reject(error);
    } else {
      resolve(results);
    }
  });
};

// Delete an item
exports.deleteItem = async (itemId, reject, resolve) => {
  let sql = `DELETE FROM items WHERE id = ?`;
  dbConnection.query(sql, itemId, (error, results) => {
    if (error) {
      reject(error);
    } else {
      resolve(results);
    }
  });
};

// Upadate an item
exports.updateItem = async (newItem, itemId, reject, resolve) => {
  await dbConnection;
  let sql = `UPDATE items SET ? WHERE id = ?`;
  dbConnection.query(sql, [newItem, itemId], (error, results) => {
    if (error) {
      reject(error);
    } else {
      resolve(results);
    }
  });
};

/////////////// HELPERS /////////////////
// Adding quantity when same item.name is added
async function addingSameItem(data) {
  let sql = `SELECT name, SUM(quantity)
    FROM items
    GROUP BY name`;
  sqlData = await dbConnection.promise().query(sql);
  return data;
}

// Subtracting quantity when same item.name is added
async function subtractingSameItem() {
  let sql = ``;
}
