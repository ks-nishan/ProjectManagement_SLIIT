process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
const express = require("express");

const TopicReg = require("../models/topicReg");
const nodemailer = require("nodemailer");

const router = express.Router();

//save Topic registration
router.post("/topicReg/save", (req, res) => {
  let newTopicReg = new TopicReg(req.body);
  console.log(newTopicReg.leaderName);
  newTopicReg.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    } else {
      return res.status(200).json({
        success: "Topic Saved Successfully",
      });
    }
  });
});

router.get("/topicReg", (req, res) => {
  TopicReg.find().exec((err, topicRegs) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    return res.status(200).json({
      success: true,
      RegisteredTopics: topicRegs,
    });
  });
});

//get specific topicReg
router.get("/topic_Reg/:id", (req, res) => {
  let topicID = req.params.id;

  TopicReg.findById(topicID, (err, topicRegs) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }

    return res.status(200).json({
      success: true,
      topicRegs,
    });
  });
});

//update topicReg
router.put("/topic_reg/update/:id", (req, res) => {
  let email = req.body.leaderEmail;
  let status = req.body.status;
  // let student = res.body.leaderName;
  let supervisor = req.body.supervisorName;
  let topic = req.body.remarks;
  TopicReg.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, topicReg) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      console.log(email);
      console.log(status);
      // console.log(student);
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
        subject: "Supervisor Status",
        text:
          "Hi " +
          "\n" +
          "Your supervisor request was " +
          status +
          " by Mr/Miss " +
          supervisor +
          ".Which is based on " +
          topic +
          "\n" +
          "If you have to no more informations about the topic content you can connect your supervisor via email." +
          "\n\n" +
          "Thank You" +
          "\n" +
          "SLIITPP 2022",
      };

      mailTransporter.sendMail(details, (err) => {
        if (err) {
          console.log("It has an error", err);
        } else {
          console.log("Update Email sent successfully");
        }
      });

      return res.status(200).json({
        success: "UPdated suucessful",
      });
    }
  );
});

//delete topicReg
router.delete("/topicReg/delete/:id", (req, res) => {
  TopicReg.findByIdAndDelete(req.params.id).exec((err, deletedTopicReg) => {
    if (err) {
      return res.status(400).json({
        message: "Delete unsuccess",
        err,
      });
    }
    return res.json({
      message: "Delete successfull",
      deletedTopicReg,
    });
  });
});

module.exports = router;
