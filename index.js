const express = require("express");
require('dotenv').config()
const app = express();

const port = process.env.PORT;
app.get('/',(req,res) => {
    res.send({ok:'you are on home page'})
})
// Listen on port 5000
app.listen(port, () => {
  console.log(`Server is booming on port 5000
Visit http://localhost:5000`);
});