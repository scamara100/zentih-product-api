// import the mongoose to help with the connection
import mongoose from 'mongoose'
import 'dotenv/config'

// store the connection string to a variable
const uri = process.env.MONGO_URI

async function connectDB(){
    try{
        await mongoose.connect(uri)
        console.log('MongoDB Connected')
    } catch(e){
        console.error(e.message)
    }
}

connectDB()
