const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const route = require('./module/route');
dotenv.config();
app.use(express.json());
// app.use(cors());
app.use(bodyParser.urlencoded({ limit: '1gb', extended: true }));


app.use('/', route);

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
