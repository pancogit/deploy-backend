// get all configurations from .env file

import dotenv from "dotenv";

// load .env file into process.env
dotenv.config();

// get server configurations
export const serverPort = Number(process.env.SERVER_PORT) || 3000;

export const serverAddress =
    process.env.USE_SERVER_REMOTE_ADDRESS === "true"
        ? process.env.SERVER_REMOTE_ADDRESS || "0.0.0.0"
        : process.env.SERVER_LOCAL_ADDRESS || "localhost";

// get client configurations
const clientPort = Number(process.env.CLIENT_PORT) || 3000;

const clientAddress =
    process.env.USE_CLIENT_REMOTE_ADDRESS === "true"
        ? process.env.CLIENT_REMOTE_ADDRESS || "0.0.0.0"
        : process.env.CLIENT_LOCAL_ADDRESS || "localhost";

// use https secured protocol for deployed environments,
// otherwise use simple http protocol for local testing
const clientProtocol =
    process.env.USE_CLIENT_REMOTE_ADDRESS === "true" ? "https" : "http";

export const clientOrigin = `${clientProtocol}://${clientAddress}:${clientPort}`;
