import mongoose from "mongoose";

async function dbConnect(){
    try{
        await mongoose.connect(`mongodb+srv://deepak:deepak108@cluster0.e8nzs77.mongodb.net/Instagram?appName=InstaDataSanitizatio`);
        console.log(`Database connected`);
    }
    catch(err){
        console.log(err);
    }
}

export default dbConnect;