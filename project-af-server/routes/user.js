process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
const express = require("express");
const User = require("../models/user");
const nodemailer = require("nodemailer");

const router = express.Router();

//create user
router.post("/user/create", (req, res) => {
  let newUser = new User(req.body);
  let email = req.body.pwd;
  let user = req.body.userName;
  let role = req.body.role;
  let id = req.body.userId;
  let password = req.body.cpwd;
  console.log(user);

  newUser.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    } else {
      let mailTransporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "nishannisha330@gmail.com",
          pass: "nisha330",
        },
      });

      let details = {
        from: "nishannisha330@gmail.com",
        to: email,
        subject: "Registration Successfull!!!",
        text:
          "Hi " +
          user +
          ",\n\n" +
          "=====Welcome to SLIIT Project Portal.=====\n" +
          "You are successfully registered to SLIIT project Portal.Your informations are below\n" +
          "User Name : " +
          user +
          "\n" +
          "User Id : " +
          id +
          "\n" +
          "User Role : " +
          role +
          "\n" +
          "Password : " +
          password +
          "\n\n" +
          "Thank You.\n" +
          "SLIIT",
      };

      mailTransporter.sendMail(details, (err) => {
        if (err) {
          console.log("It has an error", err);
        } else {
          console.log("Email sent successfully");
        }
      });

      return res.status(200).json({
        success: "User created successfully",
      });
    }
  });
});

//get all users
router.get("/user", (req, res) => {
  User.find().exec((err, users) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    return res.status(200).json({
      success: true,
      existingUsers: users,
    });
  });
});

//get specific user
router.get("/user/:id", (req, res) => {
  let uId = req.params.id;

  User.findById(uId, (err, user) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }

    return res.status(200).json({
      success: true,
      user,
    });
  });
});

//update user
router.put("/user/update/:id", (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, user) => {
      if (err) {
        return res.status(400).json({ error: err });
      }

      return res.status(200).json({
        success: "Update succesfully",
      });
    }
  );
});

//delete user
router.delete("/user/delete/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id).exec((err, deletedUser) => {
    if (err) {
      return res.status(400).json({
        message: "Delete unsuccess",
        err,
      });
    }
    return res.json({
      message: "Delete successfull",
      deletedUser,
    });
  });
});

function sum(a, b) {
  return a + b;
}

module.exports = router;
