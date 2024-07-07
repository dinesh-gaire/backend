import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app  = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"})) //to take json files
app.use(express.urlencoded({extended: true, limit: "16kb"})) // to take data from url
app.use(express.static("public")) //to store files and folders inside public
app.use(cookieParser())//to access, set cookies of users browser from server and perform crud operation 

// import routes
import userRouter from "./routes/user.routes.js";

//routes declaration
app.use("/api/v1/users", userRouter)

export {app}