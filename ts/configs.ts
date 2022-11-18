// get all configurations from .env file

import dotenv from "dotenv";

// load .env file into process.env
// use different environment variables files for development and production mode
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

// get server configurations
export const serverPort = Number(process.env.PORT) || 5000;
export const serverAddress = process.env.SERVER_ADDRESS || "localhost";

// get client configurations
const clientPort = Number(process.env.CLIENT_PORT) || 6000;
const clientAddress = process.env.CLIENT_ADDRESS || "localhost";

export const clientOrigin = `${clientAddress}:${clientPort}`;
