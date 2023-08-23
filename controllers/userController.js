const {
  getUser,
  addUser,
  addOrder,
  addOrderDetail,
  deleteOrder,
} = require("../models");

const newUser = (req, res) => {
  const { username, email, password } = req.body;
  addUser(username, email, password, (err, user) => {
    if (err) {
      console.error(err);
      res.status(500).json({err:"User Already Exist Try Another Email"});
    } else {
      res.json(user);
    }
  });
};
const UserController = (req, res) => {
  const { email, password } = req.body;
  getUser(email, password, (err, user) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    } else if (user[0] === undefined) {
      res.json("Email or password not exist");
    } else {
      res.json(user);
    }
  });
};
const userNewOrder = (req, res) => {
  const { userID, productID, quantity } = req.body;
  addOrder(userID, (err, orderID) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(`add new order successfully ${orderID}`);
      addOrderDetail(orderID, productID, quantity, (err, orderDetailsID) => {
        if (err) {
          console.error(err);
          console.log("Error", err);
        } else {
          console.log(`successful details add ${orderDetailsID}`);
        }
      });
    }
  });
};
const deleteOrderFromCarts = (req, res) => {
  const { orderID, userID } = req.body;
  deleteOrder(orderID, userID, (err, orderID) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(`Delete Order From cart Successfuly ${orderID}`);
    }
  });
};
module.exports = {
  UserController,
  newUser,
  userNewOrder,
  deleteOrderFromCarts,
};
