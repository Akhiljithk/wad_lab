const express = require("express");



var app = express();

app.listen(3000, () => { console.log("app is running"); })
app.get("/", (req, res) => {
    res.send("sdfsdf")
})