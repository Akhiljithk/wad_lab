var mongoclient = require("mongodb").MongoClient

var mongo = new mongoclient("mongodb://localhost:27017")

async function savedata(data) {
    await mongo.connect()
    var db = mongo.db("akhil")
    var coll = db.collection("swettha")
    await coll.insertMany([data])

}

module.exports = savedata;


//TODO CHEYYANAM

