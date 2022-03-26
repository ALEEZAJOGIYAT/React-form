const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const url =
  "mongodb+srv://aleeza:q2Tt77RFz7NHqiz@cluster0.nbtxw.mongodb.net/SignUp?retryWrites=true&w=majority";
const userModel = require("./models/users");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(url, {
  useNewUrlParser: true,
});

//for saving data into backened 

app.post("/add", async (req, res) => {
  const email = req.body.email;
  const agency = req.body.agency;
  const name = req.body.name;
  const identity = req.body.identity;
  const domain = req.body.domain;
  // const descr = req.body.descr;
  const rfpDate = req.body.rfpDate;
  const lead = req.body.lead;
  const subDate = req.body.subDtae;
  const estTotalVal = req.body.estTotalVal;
  const identifiedSubs = req.body.identifiedSubs;
  const completed = req.body.completed;

  const user = new userModel({
    email: email,
    agency: agency,
    name: name,
    identiy: identity,
    domain: domain,
    // descr: descr,
    rfpDate: rfpDate,
    lead: lead,
    subDate: subDate,
    estTotalVal: estTotalVal,
    identifiedSubs: identifiedSubs,
    completed: completed,
  });
  try {
    await user.save();
    res.send("data is inserted");
  } catch (err) {
    console.log(err);
  }
});

app.get("/read", async (req, res) => {
  userModel.find({}, (error, result) => {
    if (error) {
      res.send(error);
    }

    res.send(result);
  });
});

//to edit data

//it is getting that selected id 
app.get("/read/:id", async (req, res) => {
  const id=req.params.id
  userModel.find({_id:id}, (error, result) => {
    if (error) {
      res.send(error);
    }

    res.send(result);
  });
});

// app.put("/update/:id",async(req,res)=>{
//   const id=req.params.id 
//   // const updatedUser= userModel.findByIdAndUpdate({},(error,result)=>{
    
//   // }) 

// })


// ...



//for delete
app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await userModel.findByIdAndDelete(id);
  res.send("item is deleted");
});

app.listen(5000, () => {
  console.warn("app is listened");
});

