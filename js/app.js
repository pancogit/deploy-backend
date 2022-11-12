"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes/routes");
const todoModel_1 = require("./model/todoModel");
const cors_1 = __importDefault(require("cors"));
const configs_1 = require("./configs");
// create express application server
const app = (0, express_1.default)();
// add middleware for handling cross origin requests from
// react frontend application
app.use((0, cors_1.default)({ origin: configs_1.clientOrigin }));
// parse incoming http post requests bodies as json objects
app.use(express_1.default.json());
// listen to the server port and address
app.listen(configs_1.serverPort, configs_1.serverAddress, () => {
    console.log(`Server is listening on ${configs_1.serverAddress}:${configs_1.serverPort}`);
});
// set all routes
app.use("/", routes_1.router);
(0, todoModel_1.connectToDatabase)();
//# sourceMappingURL=app.js.map