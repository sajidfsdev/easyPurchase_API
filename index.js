const express=require('express');
const config=require('config');
const app=express();
const bodyParser=require('body-parser');
const mongoose=require('mongoose');

app.use(bodyParser.json());

////connection setup.......
mongoose
  .connect(config.get("db"), { useNewUrlParser: true,useUnifiedTopology: true })

  .then(result => {
    console.log("Listening at port ");

    //socket setup................
    // process.env.PORT
    const server=app.listen(3000);
    console.log("Server Activated Successfully");
  })

  .catch(err => {
    console.log(err.message);
  });