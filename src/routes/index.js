const express = require('express');
const mongoose = require('mongoose');
const cloudinary = require('cloudinary');

const Image = require('../models/image');

const router = express.Router();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

router.get('/', (req, res) => {
  res.render('images');
});

router.get('/images/add', (req, res) => {
  res.render('image_form');
});

router.post('/images/add', async (req, res) => {
  const imageCloudinary = await cloudinary.v2.uploader.upload(req.file.path).catch(error => console.log(error));
  /* const image = new Image({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    description: req.body.description,
    imageURL: req.file.path,
    public_id: imageCloudinary.public_id
  }); */
  console.log(imageCloudinary);
  /* image.save().then(result => {
    if (rerult) {
      res.status(201).json({
        message: 'Saved image successfully'
      });
    }
  }).catch(error => {
    res.status(500).json({
      error: error
    });
  }); */
});

module.exports = router;