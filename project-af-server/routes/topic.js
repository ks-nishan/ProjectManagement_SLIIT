const router = require("express").Router();
const topic = require("../models/topic");
const mongoose = require("mongoose");
const cloudinary = require("../util/cloudinary");
const multer = require("../util/multer");

router.route("/").get((req, res) => {
  topic
    .find()
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});
router.post("/add", multer.single("image"), async (req, res) => {
  console.log(req.body.Tittle);
  console.log(req.body.GroupId);
  console.log(req.body.Status);
  console.log(req.body.Feedback);
  console.log(req.body.Supervisor);
  console.log(req.body.Cosupervisor);
  console.log(req.body.L_name);
  console.log(req.body.L_email);

  console.log(req.body.Description);
  console.log(req.body.avatar);
  console.log(req.body.cloudinary_id);

  res.send("ok");
  const result = cloudinary.uploader.upload(req.file.path);

  const Topic = new topic({
    _id: new mongoose.Types.ObjectId(),
    Tittle: req.body.Tittle,
    GroupId: req.body.GroupId,
    Status: "Pending",
    Feedback: "Panel members will check your research topic",
    Supervisor: req.body.Supervisor,
    Cosupervisor: req.body.Cosupervisor,
    L_name: req.body.L_name,
    L_email: req.body.L_email,

    Description: req.body.Description,
    avatar: result.secure_url,
    cloudinary_id: result.public_id,
  });
  Topic.save()
    .then((result) => {
      console.log(result);
      res.status(200).json({ msg: "succesfully submitted" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "Error occured" });
    });
});

router.route("/update/:id").put((req, res) => {
  const Status = req.body.Status;

  const Feedback = req.body.Feedback;
  const id = req.params.id;
  topic
    .updateMany({ _id: id }, { $set: { Status: Status, Feedback: Feedback } })
    .then((result) => {
      console.log(result);
      res.status(200).json({ msg: "successfully updated" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "error occurred" });
    });
});

module.exports = router;
