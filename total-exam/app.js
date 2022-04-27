var express = require("express");
var bodyparser = require("body-parser");
var path = require("path");
var mongo_save = require("./mongo_save");
var mongo_check = require("./mongo_check");


var app = new express()

app.use(express.static('./public'))
app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs")




app.get('/', (req, res) => {
    res.render("index", { x: "get lost" })
})
// res.sendFile(path.join(__dirname, "............"))
app.get('/form1', (req, res) => {
    res.render("form1")
})
app.get('/form2', (req, res) => {
    res.render("form2")
})
app.post('/reg', async (req, res) => {

    var form_data = req.body

    await mongo_save(form_data)


    res.send("hello" + form_data.username + "ur data has been successfully saved")

})
app.post('/compare', async (req, res) => {
    var data = req.body
    var y = await mongo_check(data.username)
    console.log(y);

    if (y != null) {

        res.send("user exist")

    }
    else {
        res.send("user does not exis")
    }

})




app.listen(3000, () => {
    console.log("server running");
})