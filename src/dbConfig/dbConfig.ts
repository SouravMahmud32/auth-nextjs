import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!) //database connection
        const connection = mongoose.connection;
        connection.on("connected", () =>{
            console.log("MogoDb Connected successfully");
            
        })

        connection.on('error', (err) =>{
            console.log("MongoDB connection error. Please make sure MongoDb is running. " + err);
            process.exit();
        })

    } catch (error) {
        console.log("Something went wrong!");
        console.log(error);
        
        
    }
}