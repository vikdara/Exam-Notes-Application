import express from "express"
import dotenv from "dotenv"
import connectDB from "./utils/connectDB.js";
import dns from "dns";  // this help to resolve the dns issue 


dns.setServers(["1.1.1.1", "8.8.8.8"]);

dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 5000; // PORT is the varible in the dotenv

app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`);
    connectDB();
}); 
  
app.get("/", (req, res) => {
    res.json({message:"hello backend is running"});
     
});     