const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

// Create and Save a new User
exports.create = async (req, res) => {
  try {
      // Validate request
  if (!req.body.email) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Save user in the database
  let data  = await Tutorial.create(req.body)
  res.send(data);
  } catch (error) {
    res.status(500).send({
      message:
      error.message || "Some error occurred while creating the Tutorial."
    });
  }
};

// Find a single user with an id
exports.findOne = async (req, res) => {
  try {
    const id = req.params.id;
    let data = await Tutorial.findByPk(id)
    res.send(data);
  } catch (error) {
    res.status(500).send({
      message: "Error retrieving Tutorial with id=" + id
    });
  }
};

// Update a user by the id in the request
exports.update = async(req, res) => {
  try {
    const id = req.params.id;

    let data = await Tutorial.update(req.body, {
      where: { id: id }
    })
    if (data == 1) {
      res.send({
        message: "Tutorial was updated successfully."
      });
    }else {
      res.send({
        message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Error updating Tutorial with id=" + id
    });
  }
};

// Delete a user with the specified id in the request
exports.delete = async  (req, res) => {
  try {

    const id = req.params.id;
    let num = await Tutorial.destroy({
      where: { id: id }
    })
    if (num == 1) {
      res.send({
        message: "Tutorial was deleted successfully!"
      });
    } else {
      res.send({
        message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Could not delete Tutorial with id=" + id
    });
  }
};

// find all users
exports.findAll = async (req, res) => {
  try {
    let data = await Tutorial.findAll()
    res.send(data);
  } catch (error) {
    res.status(500).send({
      message:
      error.message || "Some error occurred while retrieving tutorials."
    });
  }
};
