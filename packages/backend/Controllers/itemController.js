const itemRepo = require('../Repo/itemRepo');

// Function to get all contents of the DB
exports.getAllItemController = async (req, res) => {
  try {
    itemRepo.getAllItems(req, (data) => {
      res.json(data);
    });
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

// Function to add a new item in the DB

// Function to delete an item in the DB
exports.deleteAnItem = async (req, res) => {
  try {
    itemRepo.deleteItem(req.params.id, (data) => {
      if (data.affectedRows == 0) {
        res.status(404).json({
          status: 404,
          statusText: 'Not Found',
          error: {
            code: 'NOT_FOUND',
          },
        });
      } else {
        res.status(200).json({
          status: 200,
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

// Function to update an item in the DB
exports.updateAnItem = async (req, res) => {
  try {
    let newItem = {
      itemName: req.body.name,
      itemDescription: req.body.description,
      itemQuantity: req.body.quantity,
    };
    itemRepo.updateItem(newItem, req.params.id, (data) => {
      if (data.affectedRows == 0) {
        res.status(404).json({
          status: 404,
          statusText: 'Not Found',
          error: {
            code: 'NOT_FOUND',
          },
        });
      } else {
        res.status(200).json({
          status: 200,
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};
