import mongoose from "mongoose";

const connectionToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MANGO_DB_URL)
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB", error.message)
    }
}

export default connectionToMongoDB;