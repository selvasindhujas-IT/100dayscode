const express = require("express")
const cors = require("cors")

const qouteapp = express();
qouteapp.use(cors());

const qoutes = [
    "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    "It is better to fail in originality than to succeed in imitation.",
    "Believe you can and you're halfway there.",
  "Dream big and dare to fail.",
  "The secret to getting ahead is getting started.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "You only live once, but if you do it right, once is enough.",

];
qouteapp.get("/qoute",(req,res)=>{
    const randomq = Math.floor(Math.random()*qoutes.length);
    res.json(qoutes[randomq]);
});
qouteapp.listen(6000,()=>{
    console.log("server is running on http://localhost:6000");
});