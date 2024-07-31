import connectDB from "./db/index.js"       //Imported the ConnectDB Function to Connect to the MongoDB Database
import dotenv from 'dotenv'                 //Imported the dotenv package to load environment Variables
import express from "express"

const app = express()

//Configuring the dotenv to load the Environment Variables From the Given path
dotenv.config({
    path : './env'
})

//Call the connectDB Function, which returns a Promise
connectDB()
.then(() => {
    //If connection is successfull then , start the server and display this
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server is running at PORT : ${process.env.PORT}`);
    });
})
.catch((err) => {
    //If DB connection fails, then display this and Show the error.
    console.log("MONGO_DB Connection failed!! : ",err);
    process.exit(1)
})


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

