const express = require('express')
const { MongoClient, ObjectId } = require('mongodb')

const app = express()

const uri = "mongodb+srv://rafayy579:Alone%3A%29%28%3A@cluster0.e0nmgls.mongodb.net/";
const client = new MongoClient(uri)

const dbName = "TodoApp"

async function main() {
    await client.connect()
    console.log('The Client has been connected sucessfully');

}





main()
    .then(console.log("Done!"))
    .catch(console.error)
    .finally(() => client.close());







app.listen('3000', () => {
    console.log('Server is running on port 3000');

})