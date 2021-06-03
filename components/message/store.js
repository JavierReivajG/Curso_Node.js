const MongoClient = require('mongodb').MongoClient;
const model = require("./model")

const uri = "mongodb+srv://JavierReivajGomez:<password>@cluster0.ps4fu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

function addMessage (message) {
    const MyMessage = new Model (message);
    MyMessage.save()
}

function getMessage() {
    return list;
}



module.exports = {
    add: addMessage,
    list: getMessage,
    //get
    //update
    //delete
}