const express = require("express");
const cors = require("cors");
//const mongodb = require("")

atlas_URL= "mongodb+srv://userdb.4gjmguy.mongodb.net/" ;
// --apiVersion 1 --username selvasindhuja1245 --password iWF8tw6mvAwPJovr;
const app = express();
app.use(cors());
app.use(express.json()); 


app.get("/", (req, res) => {
  res.send("✅ Backend is running!");
});

app.post("/contact", (req, res) => {
  console.log("contact route hit!");
  console.log("Request body:", req.body); 
  

  const { name, email, message } = req.body;


  if (!email || email.trim() === "") {
    console.log("Error: Email is missing");
    return res.json({ success: false, message: "Email is required" });
  }


  const emailRegex = /^[^\s@]+@gmail\.com$/;
  if (!emailRegex.test(email.trim())) {
    console.log(" Error: Invalid email format");
    return res.json({ success: false, message: "Invalid email format" });
  }
  console.log("Form submitted successfully");
  res.json({ success: true, message: "Form submitted successfully!" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});

// const express = require("express")
// const cors = require("cors")

// const qouteapp = express();
// qouteapp.use(cors());

// const qoutes = [
//     "Success is not final; failure is not fatal: It is the courage to continue that counts.",
//     "It is better to fail in originality than to succeed in imitation.",
//     "Believe you can and you're halfway there.",
//   "Dream big and dare to fail.",
//   "The secret to getting ahead is getting started.",
//   "Push yourself, because no one else is going to do it for you.",
//   "Great things never come from comfort zones.",
//   "You only live once, but if you do it right, once is enough.",

// ];
// qouteapp.get("/",(req,res)=>{
//     res.send("backend is running withot")
// })
// qouteapp.get("/quote",(req,res)=>{
//     const randomq = Math.floor(Math.random()*qoutes.length);
//     res.json(qoutes[randomq]);
// });
// qouteapp.listen(6000,()=>{
//     console.log("server is running on http://localhost:6000");
// });