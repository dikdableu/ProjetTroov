import mongoose from "mongoose";

const connectMongo = async () => {

  // Récupération de la variable environnement pour la connexion a mongoDb
  mongoose.connect(process.env.MONGO_URI.toString(), {
    maxPoolSize: 10,
    autoIndex: true,
  });
};

export default connectMongo;
