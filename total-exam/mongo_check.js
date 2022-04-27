var mongoclient = require("mongodb").MongoClient
var mongo = new mongoclient("mongodb://localhost:27017")

async function compare_data(data) {
    await mongo.connect()
    var db = mongo.db("akhil")
    var coll = db.collection("swettha")
    var x = await coll.findOne({ "username": data })
    console.log(data);
    return x;

}
module.exports = compare_data;