const express = require('express')
const { MongoClient, ObjectId } = require('mongodb')

const app = express()

const uri = "mongodb+srv://rafayy579:Alone%3A%29%28%3A@cluster0.e0nmgls.mongodb.net/";
const client = new MongoClient(uri)

const dbName = "TodoApp"

async function main() {
    await client.connect()
    console.log('The Client has been connected sucessfully');

    const db = client.db(dbName)
    const collection = db.collection('Todos')

    const data = [
        {
            name: "Rafay",
            fatherName: "Faheem",
            roll: "Modren  web & mobile app development",
            age: 20,
        },
        {
            name: "Wasay",
            fatherName: "Faheem",
            roll: "Manager of Phonix Company",
            age: 22,
        },
        {
            name: "Sahiban",
            fatherName: "Faheem",
            roll: "Student",
            age: 18,
        },
        {
            name: "Ibad",
            fatherName: "Azeem",
            roll: "Modren  web & mobile app development",
            age: 20,
        },
    ]
    const insertData = await collection.insertMany(data)
    console.log('Inserted Document ===> ', insertData);

}

app.use('/', (res, req) => {
  if(req.methode === "GET"){
   
  }
})

main()
    .then(console.log("Done!"))
    .catch(console.error)
    .finally(() => client.close());



app.listen('3000', () => {
    console.log('Server is running on port 3000');

})