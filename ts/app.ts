import express from "express";
import { router } from "./routes/routes";
import { connectToDatabase } from "./model/todoModel";
import cors from "cors";
import { clientOrigin, serverAddress, serverPort } from "./configs";

// create express application server
const app = express();

// add middleware for handling cross origin requests from
// react frontend application
app.use(cors({ origin: clientOrigin }));

// parse incoming http post requests bodies as json objects
app.use(express.json());

// listen to the server port and address
app.listen(serverPort, serverAddress, () => {
    console.log(`Server is listening on ${serverAddress}:${serverPort}`);
});

// set all routes
app.use("/", router);

connectToDatabase();
