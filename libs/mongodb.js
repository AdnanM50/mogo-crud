import mongoose from "mongoose";


// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(process.env.MONGO_URI, {
//         useUnifiedTopology: true,
//         useNewUrlParser: true,
//         useCreateIndex: true,
//         });
    
//         console.log(`MongoDB Connected: ${conn.connection.host}`);
//     } catch (error) {
//         console.error(`Error: ${error.message}`);
//         process.exit(1);
//     }
//     };

const connectDB = async () => {
    // mongoose.connect(process.env.MONGO_URI)
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('MongoDB Connected');
    } catch (error) {
        console.error(`Error: ${error.message}`);
        // process.exit(1);
    }
};