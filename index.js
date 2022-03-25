const express = require("express");
const user=require('./routes/user.js')
require('dotenv').config()
const app = express();
app.use('/',user)
const port = process.env.PORT;
app.get('/',(req,res) => {
    res.send({ok:'you are on home page'})
})
// Listen on port 5000
app.listen(port, () => {
  console.log(`Server is booming on port 5000
Visit http://localhost:5000`);
});