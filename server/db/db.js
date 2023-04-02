//Conexion a base de datos
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

//Cargar variables de entorno
dotenv.config();

//Cliente de MongoDB
const client = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//Conectar a la base de datos
export const connectDb = async () => {
    try {
        await client.connect();
        console.log("Connected to database");
    } catch (error) {
        console.error(error);
    }
};

export default client;