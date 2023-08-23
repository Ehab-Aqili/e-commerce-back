// routes/userRoutes.js
const express = require("express");
const {
  UserController,
  newUser,
  userNewOrder,
  deleteOrderFromCarts,
} = require("../controllers/userController");

const router = express.Router();

// Define your user routes here
router.post("/", UserController); // login
router.post("/add-user", newUser); // sign up
router.post("/add-order", userNewOrder); // order and details
router.delete("/delete-order", deleteOrderFromCarts); // complete order

module.exports = router;
