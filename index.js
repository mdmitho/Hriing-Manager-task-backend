const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');
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
   const AddAgendaList = client.db("Hiring-Manager").collection("AddAgendaList");
  
   //AUTH
  
  
  
  
  app.get('/AddAgendaList',async(req,res)=>{
      const query ={}
      const cursor = AddAgendaList.find(query)
      const result = await cursor.toArray();
      res.send(result)
  })
    
  app.post("/AddAgendaList", async (req, res) => {
    const NewAgendaList = req.body; 
    const result = await AddAgendaList.insertOne(NewAgendaList);
    res.send(result);
  });

  // delete 
  app.delete("/agenda/:id", async (req, res) => {
    const id = req.params.id;
    const query = { _id: ObjectId(id) };
    const result = await AddAgendaList.deleteOne(query);
    res.send(result);
  });
    
  }
  finally{
  
  }
   
  }

  run().catch(console.dir);
  
app.listen(port, () => {
  console.log("hiring manager task");
});