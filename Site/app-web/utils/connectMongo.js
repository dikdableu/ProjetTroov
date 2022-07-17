import mongoose from "mongoose";

const connectMongo = async () => {
  mongoose.connect(process.env.MONGO_URI.toString(), {
    maxPoolSize: 10,
    autoIndex: true,
  });
};

export default connectMongo;
