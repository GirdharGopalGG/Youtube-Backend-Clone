// require('dotenv').config({path:'./env'})

import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './.env'
})


connectDB()








// import express from "express"
// const app = express()
// ( async () => {      //DB IS IN ANOTHER CONTINENT
//     try {
//       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//       app.on("error",(error) => {
//             console.log("error: ",error)
//             throw error

//       })  

//       app.listen(process.env.port,() => {
//         console.log(`App is listening on port ${process.env.port}`)
//       })

//     } catch (error) {
//         console.error("ERROR: ",error)
//         throw error
//     }

// })()