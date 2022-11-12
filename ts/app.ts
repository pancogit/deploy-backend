import express from "express";
import dotenv from "dotenv";
import { router } from "./routes/routes";
import { connectToDatabase } from "./model/todoModel";

// load .env file into process.env
dotenv.config();

// create express application server
const app = express();

// parse incoming http post requests bodies as json objects
app.use(express.json());

const port = Number(process.env.PORT) || 3000;

const address =
    process.env.USE_REMOTE_ADDRESS === "true"
        ? process.env.SERVER_REMOTE_ADDRESS || "0.0.0.0"
        : process.env.SERVER_LOCAL_ADDRESS || "localhost";

// listen to the server port and address
app.listen(port, address, () => {
    console.log(`Server is listening on ${address}:${port}`);
});

// set all routes
app.use("/", router);

connectToDatabase();
