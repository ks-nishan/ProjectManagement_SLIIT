const router = require('express').Router();
const thesis=require('../models/thesis')
const mongoose=require('mongoose');
const cloudinary = require("../util/cloudinary");
const multer = require("../util/multer");

router.post("/", multer.single("image"), async (req, res) => {
    try {
      
      const result = await cloudinary.uploader.upload(req.file.path);
  
     
      let thesis = new Submission({
        
       file: result.secure_url,
        cloudinary_id: result.public_id,
      });
      
      await thesis.save();
      res.json(user);
    } catch (err) {
      console.log(err);
    }
  });
  module.exports = router;  