const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const exphbs = require('express-handlebars');

const router = require("./routes/index");
require('./database');

const app = express();

// Settings engine views
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

// Settings uploded files
const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/uploads'),
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // La extención de lectura solo abarca: json, texto
app.use(multer({ storage }).single('image')); // Nombre del campo que contiene la imagen: req.body.image

// Routes
app.use(router);

module.exports = app;