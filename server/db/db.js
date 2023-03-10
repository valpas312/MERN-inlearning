import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connectDb = async () => {
    try {
        await client.connect();
        console.log("Connected to database");

        const database = client.db("test")
        const collection = database.collection("mern")

        collection.insertMany([
            {
              name: "learn-react",
              upvotes: 0,
              comments: [],
            },
            {
              name: "learn-node",
              upvotes: 0,
              comments: [],
            },
          ])

          console.log("Inserted documents")

    } catch (error) {
        console.error(error);
    }
};

connectDb();