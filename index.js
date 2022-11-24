const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const cors = require('cors');
require('dotenv').config()
const port = process.env.PORT || 5000
const app= express()

app.use(cors())
app.use(express.json())



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zlhkzur.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });






//middlewre



async function run(){
  try{
   await client.connect()
   const AgendaList = client.db("Hiring-Manager").collection("AgendaList");
  
   //AUTH
  
  
  
  
  app.get('/AgendaList',async(req,res)=>{
      const query ={}
      const cursor = AgendaList.find(query)
      const result = await cursor.toArray();
      res.send(result)
  })
    
  
  
  
    
  }
  finally{
  
  }
   
  }

  run().catch(console.dir)
  
app.listen(port, () => {
  console.log("Auto Mobail running hhhh");
});