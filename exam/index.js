const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")



const app = express()
app.set('view engine', 'ejs')
app.set("views", path.join(__dirname, 'views'))
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))


app.listen(3002, () => { console.log("app is running "); })

app.get("/", (req, res) => {
    res.render("index")
})
app.get('/f1', (req, res) => {
    res.render("form1")
})
app.get('/f2', (req, res) => {
    res.render("form2")
})
app.post("/registration", (req, res) => {
    var data = req.body
    res.render("new", { myVar: data.username, myVar2: "swettha" })
})

