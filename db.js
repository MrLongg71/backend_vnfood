const {MongoClient} = require('mongodb');
const URI = "mongodb+srv://vnfood:vnfood@cluster0-amioj.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(URI,{ useUnifiedTopology: true,useNewUrlParser: true});

  async function dbVNFood () {
    try {
        await client.connect();
        // var a = client.db("vnfood").collection('User');
        // a.insertOne({name: "fddff"});
        console.log("Connect database success")

    } catch (e) {
        console.error("err: "+e);
    } finally {
        // await client.close();
        // console.log("Close database")

    }
}


module.exports = dbVNFood;
