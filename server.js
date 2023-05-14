const express = require("express");
const bodyParser = require("body-parser");
const connectDatabase = require("./config/db");
const cors = require('cors');

// const app = express();
const port = 3002;

// app.use(bodyParser.json());

// app.post("/api/users", (req, res) => {
//   const MongoClient = require("mongodb").MongoClient;

//   const url =
//     "mongodb+srv://thiru_research:thiru1997@cluster0.yhztkrc.mongodb.net/?retryWrites=true&w=majority";

//   MongoClient.connect(url, (err, db) => {
//     if (err) {
//       console.error("Error connecting to MongoDB", err);
//       return;
//     }

//     console.log("Connected to MongoDB");
//     const collection = db.collection("mycollection");

//     const document = { name: "test by kiruthi", email: "kiruthi@example.com" };

//     collection.insertOne(document, (err, result) => {
//       if (err) {
//         console.error("Error inserting document", err);
//         db.close();
//         return;
//       }

//       console.log("Document inserted successfully");
//       console.log(result.ops);

//       db.close();
//     });
//   });
// });
// const cors = require('cors');
const app = express();
app.use(cors({
    origin: "*"
}))
app.use(express.json());

app.use("/", require("./route"));
connectDatabase();

// app.use((req,res,next)=>{
//     const error = new Error("NOT found");
//     error.status = 404;
//     next(error);
// })
// app.use((err, req, res, next) => {
//     res.status(err.status || 500);
//     res.json({
//         error:{
//             message: "Something went rely wrong",
//         }
//     });
// });

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
