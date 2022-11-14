"use strict";
// get all configurations from .env file
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientOrigin = exports.serverAddress = exports.serverPort = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
// load .env file into process.env
dotenv_1.default.config();
// get server configurations
exports.serverPort = Number(process.env.PORT) || 3000;
exports.serverAddress = process.env.USE_SERVER_REMOTE_ADDRESS === "true"
    ? process.env.SERVER_REMOTE_ADDRESS || "0.0.0.0"
    : process.env.SERVER_LOCAL_ADDRESS || "localhost";
// get client configurations
const clientPort = Number(process.env.CLIENT_PORT) || 3000;
const clientAddress = process.env.USE_CLIENT_REMOTE_ADDRESS === "true"
    ? process.env.CLIENT_REMOTE_ADDRESS || "0.0.0.0"
    : process.env.CLIENT_LOCAL_ADDRESS || "localhost";
// use https secured protocol for deployed environments,
// otherwise use simple http protocol for local testing
const clientProtocol = process.env.USE_CLIENT_REMOTE_ADDRESS === "true" ? "https" : "http";
exports.clientOrigin = `${clientProtocol}://${clientAddress}:${clientPort}`;
//# sourceMappingURL=configs.js.map