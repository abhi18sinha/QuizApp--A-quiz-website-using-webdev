const express = require("express");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const port = process.env.PORT || 5000;
const schema = require("./schema/schema");
const connectDB = require("./config/db");
const path = require("path");
const app = express();

connectDB();
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("out"));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "../", "out", "index.html"));
//   });
// }

app.listen(port, console.log(`Server running on ${port}`));
