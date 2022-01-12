const express = require("express");
require('dotenv').config()
const mongoose = require("mongoose");
const cors = require('cors')

const app = express();
app.use(express.json())
app.use(cors())

// supposant etre en fichier .env
var hamzaDB = "mongodb+srv://hamza:shadowfight@cluster0.x6iqq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// mongoose.connect("mongodb://localhost:27017/biblio-mean-hamza", {
  mongoose.connect(hamzaDB, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected successfully to MongoDB !"))
  .catch(() => console.log("Connection failed to MongoDB !"));

  // autre ecriture de mongo
  // const conSuccess = mongoose.connection
  // conSuccess.once('open', _ => {
  //   console.log('Database connected:', hamzaDB);
  // })


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// Routes
app.get("/api/books", (req, res) => {
  Course.find()
    .then((books) => res.status(200).json(books))
    .catch((err) => res.status(400).json({ message: err.message }));
});

// app.use('/user', require('./routes/userRouter'))

app.use('/api', require('./routes/bookRouter'))

// test request 

app.use((req, res) => {
  res.json({ message: "This is hamza test backend response" });
});


// const PORT = process.env.PORT || 5000;
// app.listen(PORT, ()=>{
//   console.log('Server work on 5001');
// })

module.exports = app;
