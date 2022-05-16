const express = require("express");
const app = express();
const port = 4000;

app.get("/name", (req, res) => {
  res.send("Hello Sonny!!!");
  //MUST SEND A RESPONSE OR IT WILL HANG
});

// app.get("*", (req, res) => {
//     res.send("Wild Card!")
// })

app.get("/sonny", (req,res) => {
    res.send("Phone number is 917-831-8317!")
})

app.use((req, res, next) => {
  res.status(404).send(`Unable to find the requested resource!`);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
