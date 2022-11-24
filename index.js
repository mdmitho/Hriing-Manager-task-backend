const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const cors = require('cors');
require('dotenv').config()
const port = process.env.PORT || 5000
const app= express()




const uri = "mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zlhkzur.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });






//middlewre

app.use(cors())
app.use(express.json())

 
app.listen(port, () => {
  console.log("Auto Mobail running");
});