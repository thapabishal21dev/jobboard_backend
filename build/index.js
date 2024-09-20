"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//create an app using express
const app = (0, express_1.default)();
// get port and mongodb url from .env file using dotenv
const PORT = process.env.PORT || 3000;
const CONNECTDATABASE = process.env.DATABASE_URL;
//this will solve CORS ERROR POLICY
const corsOptions = {
    origin: process.env.BASE_URL,
    Credential: true,
    optionSuccessStatus: 200,
};
// now use cors with app
app.use((0, cors_1.default)(corsOptions));
// connect mongoDB
// json
app.use(express_1.default.json());
//cookie-parser
app.use((0, cookie_parser_1.default)());
app.listen(PORT, () => {
    console.log(`server running at port ${PORT}`);
});
