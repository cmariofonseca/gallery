const express = require('express');

const init = require('./app');

const app = express();

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
  console.log(`Server running on port ${app.get('port')}`);
});

app.use(init);