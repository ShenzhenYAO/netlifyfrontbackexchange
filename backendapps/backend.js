// to parse the string from frontend
// import mongoclient module from mongodb
const MongoClient = require('mongodb').MongoClient;
const uri = process.env.MONGODB_TREEDB_TREES_URI;
const dbName = 'treedb', collectionName = 'trees';

exports.handler = async (event, context, callback) => {

    // we keep the DB connection alive
    context.callbackWaitsForEmptyEventLoop = false;

    // isn't it just like that????
    let thejson = event.body
    let thejsonstr = JSON.stringify(thejson)
    let strFromBackToFront = "The string from frontend " + thejsonstr
        + " was received. This message was from the backend."

    let resolveddata = {
        userid: "randomone",
        treejson: { name: "makeup", segment: 0, string: thejsonstr }
    }

    //make an instant (client) of the MongoClient module,  add {useUnifiedTopology: true} to suppress some warning messages...
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    // use promise to add data to mongodb
    const newpromise1 = new Promise(
        // then new promise is to define a resolved value
        (resolve) => {
            // connect to mongodb and add a record
            client.connect(err => {
                const collection = client.db(dbName).collection(collectionName);
                collection.insertOne(resolveddata, function (err, res) {
                    if (err) throw err;
                    resolve(res)
                });
            })// client.connect()
        }//resolve
    ) // new promise1;

    const resolved = await newpromise.then(d => {
        // console.log(d)
        return d
      })


    // return lambdaResponse
    return {
        statusCode: 200,
        body: strFromBackToFront
    };

}