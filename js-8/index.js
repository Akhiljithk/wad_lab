const express = require("express");
const db = require("./mongodb");
const path = require("path");
var bodyParser = require('body-parser');

var app = express();
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(3001, () => { console.log("app running"); })

db.connect();

app.get("/", (req, res) => {
    res.render("index")
})

app.get('/f1', (req, res) => {
    res.render("form1")
})

app.post("/register", (req, res) => {
    let data = req.body;
    var mydb;
    mydb = db.get();

    mydb.collection("books").insertOne(data, function (err, result) {
        res.send(`Dear ${data.username}, your data have been saved`);
    })
})

app.get('/f2', (req, res) => {
    res.render("form2")
})

// app.post("/register", (req, res) => {
//     let username = req.body.username;
//     let password = req.body.password;
//     var mydb;
//     mydb = db.get();
//     mydb.collection("books").findOne({ username: username, password: password }, function (err, result) {
//         if (result) {
//             res.send("user present")
//         } else {
//             res.send("user not exist")
//         }
//     })
// })
