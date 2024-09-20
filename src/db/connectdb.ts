import mongoose, { ConnectOptions } from "mongoose";

const dbConnection = async () => {
  const dbURI = process.env.DATABASE_URL as string;
  const options: ConnectOptions = {
    retryWrites: true,
    w: "majority",
  } as ConnectOptions;

  try {
    const connection = await mongoose.connect(dbURI, options);
    console.log("connected to mongoDB");
    return connection;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

export default dbConnection;
