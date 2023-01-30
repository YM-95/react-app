import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { router } from './routes/workout.js'

const app = express();

const db = "mongodb+srv://yordan_manolov:15115056qwe@atlascluster.t3w7b7o.mongodb.net/?retryWrites=true&w=majority"

async function connect() {

    try {
        await mongoose.connect(db)
        console.log("MongoDB connected");
    } catch (err) {
        console.log(err);
    }
}

app.use('/', router)



connect()

app.listen(3000, () => {
    console.log("server start at port 3000");
});