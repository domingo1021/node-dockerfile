const express = require('express');
const app = express();

app.get("/backend", (req, res)=>{
  return res.status(200).send("Hello world !")
})

app.listen(3000, ()=>{
  console.log("listening at port 3000.")
})
