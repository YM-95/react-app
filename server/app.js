const dotenv = require('dotenv');
dotenv.config()
const express = require("express");
const mongoose = require("mongoose");
const router = require('./routes/workout')

const app = express();


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/', router)




async function connect() {

    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connected");
    } catch (err) {
        console.log(err);
    }
}


connect()

app.listen(3000, () => {
    console.log("server start at port 3000");
});