import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

export const connectDb = async () => {
    try {
        await client.connect();
        console.log("Connected to database");
    } catch (error) {
        console.error(error);
    }
};

export default client;