// const os = require('os');
// const fs = require('fs');
// console.log('OS Version', os.version());
// console.log('OS', os.arch());

// //fs.writeFileSync('Hello.txt', 'I am writing from Node');
// fs.appendFileSync('Hello.txt', '\n More text incoming');

// const content = fs.readFileSync('Hello.txt');
// console.log(content.toString());

// console.log('Running Node');

const express = require('express')
const { MongoClient } = require('mongodb')
require('dotenv').config()

const app = express()
const port = 5000

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vmqip.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run(){
    try{
        await client.connect();
        console.log('database connected');

    }finally{
        //await client.close();
    }
}

run().catch(console.dir);

app.get('/', (req, res) => {
    console.log(req);
    console.log(res)
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
/*
1.One time installation of nodemon
2.mongodb atlas user, access
3. Network Access (ip address allow) 


Every project

1. install mongodb
2.import mongodb
3.copy uri
4. create the client (copy code from atlas)
5. create or get database access credentials (username, password)
6.create .env file and add DB_USER DB_PASS as environment variable
7.Make sure to require(import) dotenv
8.Convert URI string to a template string
9.Add DB_USER and DB_PASS in the connection URI string
10.Check URI string by using console.log
11.Create async function run and call it by using run().catch(console.dir)
12. Add try and finally inside the run function
13.Comment out await client.close() to keep the connection alive
14.Add await client.connect() inside the try block
15. use a console log to make sure if the database is connected
 */