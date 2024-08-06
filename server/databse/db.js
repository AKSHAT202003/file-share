
import mongoose from "mongoose";



const dbconnection=async()=>{
    const MONGODB_URL=`mongodb+srv://user:codeforinterview@filesharing.w145x.mongodb.net/?retryWrites=true&w=majority&appName=filesharing`
    try{
        await mongoose.connect(MONGODB_URL);
        console.log('database connected');
        
    }catch(error){
        console.error('error while connecting to db',error.message);
    }
}
export default dbconnection;