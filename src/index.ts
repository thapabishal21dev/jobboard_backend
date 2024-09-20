import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import dbConnection from "./db/connectdb";
import { register } from "./controllers/user.controller";
dotenv.config({});

//create an app using express
const app = express();

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
app.use(cors(corsOptions));

// connect mongoDB

// json
app.use(express.json());

//cookie-parser
app.use(cookieParser());

//load api route'
app.use("/", register);

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
  dbConnection();
});

export default app;
