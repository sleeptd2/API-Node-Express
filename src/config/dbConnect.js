import mongoose from "mongoose"

mongoose.connect("mongodb+srv://dkjed.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;