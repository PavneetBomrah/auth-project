import mongoose from 'mongoose'

export default async function connectDB(){
    try{
        mongoose.connect(process.env.MONGO_URI)
        console.info("DB Connection Successful")
    }
    catch (error){
        console.error("Error connecting to DB",error)
        process.exit(1)
    }
}