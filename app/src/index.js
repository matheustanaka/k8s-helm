import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { validateDbConnection, GetBooks, InsertBook } from "./db/queries.js";

// Express config
const app = express();
dotenv.config();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

validateDbConnection();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/books", GetBooks);
app.post("/book", InsertBook);

app.listen(port, () => {
  console.log("Server is listening on port", port);
  console.log(`http://localhost:${port}`);
});
