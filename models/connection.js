const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const DATABASE_URI = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
const client = new MongoClient(DATABASE_URI);
exports.database = client.db("assignment");
