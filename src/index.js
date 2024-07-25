import connectDB from "./db/index.js"
import dotenv from 'dotenv'

dotenv.config({
    path : './env'
})

connectDB()

















/*

One of the Approach to connect the database with the project . Not the Ideal Approach bcos index.js file is polluted

import express from "express"
const app = express()

;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("Error",(error) => {
            console.log("Error",error);
            throw error
        })

        app.listen(process.env.PORT,() => {
            console.log(`App is Listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR :",error)
        throw error
    }
})
*/

