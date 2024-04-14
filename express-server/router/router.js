const express = require("express");
const { simpleMiddleWare } = require("../middle-ware/middleware");
const { db } = require("../data-base/database");
const UserModel = require("../data-base/model/schema");

const router = express.Router();

router.post("/test", simpleMiddleWare, async (req, res, next) => {
  //   console.log(req.body);

  const { name, password, email, id } = req.body;

  //   console.log({name , password , email , id});

  const findDoc = await UserModel.findOne({
    name: { $eq: name },
    email: { $eq: email },
  });

  const toSend = { satus: false, message: "", payload: null };

  if (!findDoc) {
    const user = new UserModel({ name, email, password });
    console.log(user);
    const savedDoc = await user.save();
    toSend.message = "user added";
    savedDoc.id = savedDoc._id;
    toSend.payload = savedDoc;
    toSend.satus = true;
  }

  res.status(toSend.satus ? 200 : 409).json(toSend);
});

module.exports = router;
