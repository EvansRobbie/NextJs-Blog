import mongoose from "mongoose";
const connect = async () => {
  const mongoUrl = process.env.MONGO_URL;
  if (!mongoUrl) {
    throw new Error('MONGO_URL environment variable is not defined');
  }

  try {
    await mongoose.connect(mongoUrl);
  } catch (error) {
    throw new Error('Connection Failed');
  }
};

export default connect;