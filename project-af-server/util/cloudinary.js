const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: 'sivalingam',
  api_key: '539441899559589',
  api_secret: 'DZY6wie2uxJTSJtkVGzEiwyAF6g',
});

module.exports = cloudinary;