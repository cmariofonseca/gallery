const mongoose = require('mongoose');

// Connect with database MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }).then(db => {
  console.log('MongoDB is connected');
}).catch(error => {
  console.log(error.message);
});