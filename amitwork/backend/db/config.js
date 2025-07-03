const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/e-commerce');
 
// googal

 require('dotenv').config();

 mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
 }).then(() => console.log("MongoDB connected"))
   .catch(err => console.error("MongoDB error:", err));
