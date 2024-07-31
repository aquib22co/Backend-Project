import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

//Middleware to handle CORS with specific configurations
app.use(cors({
    origin : process.env.CORS_ORIGIN,  // Origin for from where the CORS is coming
    credentials: true,                 // Whether to include credentials of users in HTTP requests
}))

app.use(express.json({limit : "16kb"}))                             //Middleware to parse JSON Bodies of incoming request within the size 16kb

//Middleware to parse URL-Encoded bodies of incoming requests with extended syntax and size limit of 16kb
app.use(express.urlencoded({extended: true, limit : "16kb"}))   

app.use(express.static("public"))                                   //Middleware to serve static files from the public Directory

app.use(cookieParser())                                             // Middleware to parse cookies attached to the client Request object

export { app }