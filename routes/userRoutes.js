// routes/userRoutes.js
const express = require("express");
const {
  UserController,
  newUser,
  userNewOrder,
  deleteOrderFromCarts,
  getOrdersForSpecificUser,
} = require("../controllers/userController");

const router = express.Router();

// Define your user routes here
router.post("/", UserController); // login
router.post("/add-user", newUser); // sign up
router.post("/add-order", userNewOrder); // order and details
router.delete("/delete-order", deleteOrderFromCarts);
router.get("/get-order/:id", getOrdersForSpecificUser);

module.exports = router;
