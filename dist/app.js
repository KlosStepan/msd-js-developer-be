"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
//@ts-ignore
const apiController_1 = require("./apiController");
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
//Hello World!
app.get('/', (req, res) => {
    res.send('Hello World!');
});
//REST API version
/*app.get('/v', (req, res) => {
  res.send(returnApiVersion());
});*/
//Data1 for our application
app.get('/data1', (req, res) => {
    res.send((0, apiController_1.getData1)());
});
//# sourceMappingURL=app.js.map