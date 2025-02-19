const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const { createContact, getAllContacts,deleteContact } = require("./controllers/contactController");
dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.post("/api/contact", createContact);
app.get("/api/Feedback", getAllContacts);
app.delete("/api/contact/:id", deleteContact)

mongoose.connect("mongodb://127.0.0.1:27017/Feedback", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })  
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.error("MongoDB Connection Error:", err));
    
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
