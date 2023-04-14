import mongoose from "mongoose";

mongoose.connect("mongodb+srv://<user>:<password>@clusternodeexpress.singrhz.mongodb.net/nodeLivraria");

let db = mongoose.connection;

export default db;