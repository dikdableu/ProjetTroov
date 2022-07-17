import connectMongo from "../../../utils/connectMongo";
import Receipts from "../../../models/receiptsModel";

export default async function getReceipts(req, res) {
  try {
    await connectMongo();
    const receiptsApi = await Receipts.find();
    console.log(receiptsApi);
    if (receiptsApi.length > 0) {
      res
        .status(200)
        .json({ success: "l'utilisateur a été trouvé !", data: receiptsApi });
    } else {
      res.status(400).json({ error: "oops il y a eu une erreur " });
    }
  } catch (error) {
    console.log(error);
    return error;
  }
}
