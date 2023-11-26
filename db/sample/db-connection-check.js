/**
 * sample code for connecting to MongoDB from mongoDB Atlas
 */


require('dotenv').config();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWD;
const serverName = process.env.DB_SERVER;

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${dbUser}:${dbPassword}@${serverName}/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);