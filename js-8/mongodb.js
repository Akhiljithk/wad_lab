const MongoClient = require("mongodb").MongoClient;

var state = {
    db: null
}

module.exports = {
    connect: () => {
        MongoClient.connect("mongodb://localhost:27017", (err, client) => {
            if (err) {
                console.log(err);
            }
            else {
                state.db = client.db("user")

            }
            console.log("database connected");

        })
    },
    get: () => {
        return state.db
    }
}
